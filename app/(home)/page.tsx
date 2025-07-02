import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center text-center py-16 gap-6 bg-white dark:bg-neutral-900 min-h-screen">
      <img src="/Logo-detecta.svg" alt="Logo Detecta" className="w-24 h-24 mb-4" />
      <h1 className="text-4xl font-extrabold text-fd-foreground dark:text-white mb-2">Detecta Docs</h1>
      <p className="text-lg text-fd-muted-foreground dark:text-gray-300 max-w-xl mb-6">
        Bem-vindo à plataforma de documentação do Detecta! Aqui você encontra guias, exemplos e tudo que precisa para começar a usar o sistema de forma rápida e eficiente.
      </p>
      <Link
        href="/docs"
        className="px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold shadow hover:bg-gray-800 transition dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
      >
        Acessar Documentação
      </Link>
      <div className="flex gap-4 justify-center mt-4">
        <Link href="/docs/guia/primeiro-guia" className="underline text-fd-foreground/80 hover:text-fd-foreground dark:text-white/80 dark:hover:text-white">Guia Rápido</Link>
        <Link href="/docs/examples/exemplo-basico" className="underline text-fd-foreground/80 hover:text-fd-foreground dark:text-white/80 dark:hover:text-white">Exemplos</Link>
      </div>
      <footer className="absolute bottom-3 text-xs text-fd-muted-foreground dark:text-gray-400">
        Detecta Docs v1.0.0 &copy; {new Date().getFullYear()}
      </footer>
    </main>
  );
}
