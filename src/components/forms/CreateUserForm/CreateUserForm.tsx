import { constApiRoute } from '@/lib/routes/apiRoutes';
import { constRoutes } from '@/lib/routes/routes';
import FormatTelefone from '@/utils/formatTelefone';
import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type CreateUserFormProps = {
  className?: string;
}

export default function CreateUserForm({
  className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
}: CreateUserFormProps) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const router = useRouter();

  const handleInputCPF = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = event.target.value.replace(/\D/g, '');
    const cpfWithMask = formattedCPF.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      '$1.$2.$3-$4'
    );

    setCpf(cpfWithMask);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nome || !cpf || !email || !senha) {
      setError('Por favor, preencha os campos obrigatórios.');
      return;
    }

    const numericCPF = cpf.replace(/\D/g, '');
    if (numericCPF.length !== 11) {
      setError('CPF deve conter 11 dígitos numéricos.');
      return;
    }

    const formattedTelefone = telefone.replace(/\D/g, '');

    try {
      const payload = {
        nome: nome,
        cpf: cpf,
        telefone: formattedTelefone,
        escolaridade: escolaridade ? escolaridade : "Prefiro não dizer",
        email: email,
        senha: senha,
      };

      // API
      const response = await fetch(constApiRoute.cadastro, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Erro ao cadastrar usuário');
      }

      const result = await response.json();

      setNome('');
      setCpf('');
      setTelefone('')
      setEscolaridade('')
      setEmail('');
      setSenha('');

      setError("")
      setSuccess('Usuário cadastrado com sucesso!');
      router.push(constRoutes.login)

    } catch (error: any) {
      console.error('Erro:', error);
      setError(error.message || 'Erro ao cadastrar usuário');
      alert(error)
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <div className="my-5">
        <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          CPF <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="cpf"
          type="text"
          name='cpf'
          value={cpf}
          placeholder='000.000.000-00'
          onChange={handleInputCPF}
          maxLength={14}
          className={className}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nome <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          maxLength={54}
          className={className}
        />
      </div>
      <div className="mb-5">
        <FormatTelefone value={telefone} onChange={setTelefone} />
      </div>
      <div className="mb-5">
        <label htmlFor="escolaridade">Escolaridade:</label>
        <select
          id="escolaridade"
          name="escolaridade"
          value={escolaridade}
          onChange={(e) => setEscolaridade(e.target.value)}
          className={className}
        >
          <option value="" disabled>
            Selecione a escolaridade
          </option>
          <option value="omitido">Prefiro não dizer</option>
          <option value="fundamental incompleto">Fundamental incompleto</option>
          <option value="fundamental completo">Fundamental completo</option>
          <option value="medio incompleto">Médio incompleto</option>
          <option value="medio completo">Médio completo</option>
          <option value="superior incompleto">Superior Incompleto</option>
          <option value="superior completo">Superior Completo</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Email <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={className}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Senha <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="senha"
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={className}
        />
      </div>
      <Button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Cadastrar
      </Button>
      <div className='flex flex-col justify-center text-center pt-4'>
        {error &&
          <div className='text-red-500 bg-red-100 rounded-lg text-center w-full p-2'>
            {error}
          </div>
        }
        {success &&
          <div className='text-green-500 bg-green-100 rounded-lg text-center w-full p-2'>
            {success}
          </div>
        }
      </div>
    </form>
  );
}