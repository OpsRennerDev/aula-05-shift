export default function Contato() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <form className="flex flex-col gap-4 max-w-md">
        <input type="text" placeholder="Seu nome" className="input input-bordered p-2 border rounded" />
        <input type="email" placeholder="Seu e-mail" className="input input-bordered p-2 border rounded" />
        <textarea placeholder="Sua mensagem" className="textarea textarea-bordered p-2 border rounded" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Enviar
        </button>
      </form>
    </div>
  );
}
