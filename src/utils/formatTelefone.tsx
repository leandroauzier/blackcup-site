import React from 'react';

const FormatTelefone: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valorAtual = e.target.value.replace(/\D/g, '');
    let novoValor = '';

    if (valorAtual.length > 0) {
      novoValor += '(' + valorAtual.substring(0, 2);
    }
    if (valorAtual.length > 2) {
      novoValor += ') ' + valorAtual.substring(2, 7);
    }
    if (valorAtual.length > 7) {
      novoValor += '-' + valorAtual.substring(7, 11);
    }

    onChange(novoValor);
  };

  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="telefone">
        Telefone
      </label>
      <input
        type="tel"
        id="telefone"
        name="telefone"
        placeholder='(11) 98765-4321'
        value={value}
        onChange={handleInputChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default FormatTelefone;