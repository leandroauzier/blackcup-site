import { constApiRoute } from '@/lib/routes/apiRoutes';
import { constRoutes } from '@/lib/routes/routes';
import FormatTelefone from '@/utils/formatTelefone';
import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import { signInBC } from '@/lib/auth/auth';
import { Route } from '@/lib/routes';
import { CurrentUserContext } from '@/lib/client/current-user-context';
import React from 'react';

type CreateUserFormProps = {
  className?: string;
}

export default function CreateUserForm({
  className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
}: CreateUserFormProps) {
  const { setCurrentUser } = React.useContext(CurrentUserContext);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [escolaridade, setEscolaridade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

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

    if (!nome || !email || !senha || !confirmEmail || !confirmSenha) {
      Swal.fire({
        color: "white",
        background: "#020617",
        icon: "error",
        title: "Existem Campos em branco",
        text: "Preencha todos os campos obrigatórios para continuar"
      })
      return;
    }

    // const numericCPF = cpf.replace(/\D/g, '');
    // if (numericCPF.length !== 11) {
    //   setError('CPF deve conter 11 dígitos numéricos.');
    //   return;
    // }

    const formattedTelefone = telefone.replace(/\D/g, '');

    if (email !== confirmEmail) {
      setError('Os e-mails não coincidem.');
      Swal.fire({
        color: "white",
        background: "#020617",
        icon: "error",
        title: "Os e-mails não coincidem.",
      });
      return;
    }

    if (senha !== confirmSenha) {
      Swal.fire({
        color: "white",
        background: "#020617",
        icon: "error",
        title: "As senhas não coincidem.",
      });
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const payload = {
        nome: nome,
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

      Swal.fire({
        color: "white",
        background: "#020617",
        icon: "success",
        title: "Usuário criado",
        text: "Sua conta BlackCup foi criada com sucesso",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });

      // Login automático
      // const unmaskedCpf = cpf.replace(/\D/g, '');
      try {
        const creds = {
          email: email,
          senha: senha,
        };
        const autoLogin = await signInBC(creds);

        if (autoLogin.kind === 'error') {
          throw new Error('Usuário não encontrado');
        }

        Swal.fire({
          color: "white",
          background: "#020617",
          icon: "success",
          title: "Logado com sucesso",
          timer: 2000,
          timerProgressBar: true
        });

        await new Promise(resolve => setTimeout(resolve, 500));
        setCurrentUser(autoLogin.user);
        setNome('');
        setCpf('');
        setTelefone('');
        setEscolaridade('');
        setEmail('');
        setSenha('');
        router.push(Route.link.home);

        setNome('');
        // setCpf('');
        setTelefone('')
        setEscolaridade('')
        setEmail('');
        setSenha('');

        setError("")

      } catch (error: any) {
        console.error('AutoLogin deu erro:', error);
        Swal.fire({
          color: "white",
          background: "#020617",
          icon: "error",
          title: "Oops...",
          text: "Algo de errado aconteceu com seu login",
        });
      }

    } catch (error) {
      console.error('Erro durante criação do cadastro', error);
      Swal.fire({
        color: "white",
        background: "#020617",
        icon: "error",
        title: "Erro interno",
        text: "Houve um erro ao tentar registrar ou fazer login.",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      {/* <div className="my-5">
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
      </div> */}
      <div className="mb-5">
        <label htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Nome <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="name"
          type="text"
          value={nome}
          placeholder='Digite seu nome completo'
          onChange={(e) => setNome(e.target.value)}
          maxLength={80}
          className={className}
          autoFocus
        />
      </div>
      <div className="mb-5">
        <FormatTelefone
          value={telefone}
          onChange={setTelefone}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="escolaridade" className='text-white'>Escolaridade:</label>
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
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={className}
        />
      </div>
      {email !== confirmEmail &&
        <p className='text-red-500 p-2 my-2 bg-red-300 rounded-lg text-center'>Emails não coincidem</p>
      }
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirmar Email <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder='Confirme seu email'
          autoComplete='off'
          onPaste={(e) => e.preventDefault()}
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
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
          placeholder='Digite sua senha'
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className={className}
        />
      </div>
      {senha !== confirmSenha &&
        <p className='text-red-500 p-2 my-2 bg-red-300 rounded-lg text-center'>Senhas não coincidem</p>
      }
      <div className="mb-5">
        <label htmlFor="senha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Confirmar Senha <span style={{ color: 'red' }}>*</span>
        </label>
        <input
          id="senha"
          type="password"
          placeholder='Confirme sua senha'
          autoComplete='off'
          onPaste={(e) => e.preventDefault()}
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          className={className}
        />
      </div>
      <Button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Cadastrar
      </Button>
    </form>
  );
}