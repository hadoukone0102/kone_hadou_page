export default function CataloguePage() {
    return (
        <div className="bg-primary min-h-screen px-4 sm:px-6 lg:px-8 py-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-4">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-all"
                    >
                        ← Retour
                    </a>
                </div>
                <div className="w-full bg-black/20 rounded-lg overflow-hidden">
                    <iframe
                        src="/CATALOGUE-compresse.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        title="Catalogue produits SIGLASS"
                        className="w-full h-[88vh] bg-white"
                    />
                </div>
            </div>
        </div>
    );
}
