import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function RyoInnerAccess() {
  const [email, setEmail] = useState('');
  const [unlocked, setUnlocked] = useState(false);

  const handleAccess = () => {
    if (email.trim()) {
      setUnlocked(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <Card className="bg-zinc-900 border-zinc-800 max-w-xl w-full rounded-2xl shadow-xl">
        <CardContent className="p-8 text-center space-y-6">
          {!unlocked ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-2xl font-semibold tracking-wider uppercase">Acesso Interno</h1>
              <p className="text-zinc-400">
                Você está prestes a entrar no <span className="text-white font-bold">Círculo Interno do Ryo Project</span>.
                Insira o e-mail usado na compra. Cada acesso é monitorado.
              </p>
              <div className="space-y-4 pt-4">
                <Input
                  placeholder="seuemail@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
                <Button onClick={handleAccess} className="w-full bg-white text-black hover:bg-zinc-200">
                  Liberar Acesso
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold uppercase tracking-wide">Você entrou.</h2>
              <p className="text-zinc-400">
                A partir deste ponto, não há volta. Você agora faz parte do Círculo.
              </p>
              <ul className="text-left list-disc list-inside text-zinc-300">
                <li>🔒 Acesso a arquivos não públicos</li>
                <li>🧬 Benefícios ocultos e fases experimentais</li>
                <li>🚚 Rastreamento com prioridade RYO</li>
                <li>👁️ Atualizações internas do projeto</li>
              </ul>
              <p className="text-sm text-zinc-600 italic">
                Mantenha o sigilo. Sua presença está registrada.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
