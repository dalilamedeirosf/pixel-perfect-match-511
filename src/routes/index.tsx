import { createFileRoute } from "@tanstack/react-router";
import { LOGO_BASE64 } from "@/assets/logo-base64";
import { IPHONE15_BASE64, XIAOMI14_BASE64 } from "@/assets/products-base64";
import { PHONES_MOCKUP_BASE64 } from "@/assets/phones-mockup-base64";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Virtus App — Seu Clube de Vantagens" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo"><img src={LOGO_BASE64} style={{ height: "48px", width: "auto" }} alt="Virtus App" /></div>
        <ul>
          <li><a href="#como">Como funciona</a></li>
          <li><a href="#beneficios">Benefícios</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#admin">Painel</a></li>
        </ul>
        <a href="#cta" className="nav-cta">Quero o Virtus App</a>
      </nav>
      
      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-kicker anim-fadeup">Clube de Vantagens Premium</p>
            <h1 className="hero-h1 anim-fadeup-2">Transforme clientes em <span className="gold">fãs</span> da sua loja</h1>
            <p className="hero-sub anim-fadeup-3">O Virtus App é o clube de vantagens que faz seu cliente voltar sempre — com pontos, fidelidade, planos VIP e sorteios exclusivos. Tudo no seu nome.</p>
            <div className="hero-btns anim-fadeup-3">
              <a href="#cta" className="btn-primary">Quero apresentação completa</a>
              <a href="#como" className="btn-outline">Ver como funciona</a>
            </div>
            <div className="hero-stats">
              <div>
                <div className="hero-stat-n">5.249</div>
                <div className="hero-stat-l">clientes cadastrados</div>
              </div>
              <div>
                <div className="hero-stat-n">1.032</div>
                <div className="hero-stat-l">assinantes VIP</div>
              </div>
              <div>
                <div className="hero-stat-n">R$20k</div>
                <div className="hero-stat-l">receita recorrente VIP</div>
              </div>
            </div>
          </div>
      
          {/* PHONES — imagem real com frame iPhone */}
          <div className="phone-container-wrapper">
            <img
              src={PHONES_MOCKUP_BASE64}
              alt="Virtus App - 3 telas do aplicativo"
              className="phones-mockup-img"
            />
          </div>
        </div>
      </section>
      
      {/* PROBLEMS */}
      <section id="problemas">
        <div style={{ padding: "120px 0", background: "transparent" }}>
          <div className="container">
            <p className="section-label">O problema real</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: "700", maxWidth: "500px", lineHeight: "1.1", letterSpacing: "0.05em" }}>Sua loja perde clientes <span className="gold">todos os dias</span> sem perceber</h2>
            <div className="divider"></div>
            <div className="problems-grid">
              <div className="problem-card">
                <div className="problem-n">01</div>
                <div className="problem-title">Cliente some após a compra</div>
                <div className="problem-text">Comprou o celular, foi embora. Quando precisar trocar daqui 2 anos, vai no concorrente. Você não tem como reconectá-lo.</div>
              </div>
              <div className="problem-card">
                <div className="problem-n">02</div>
                <div className="problem-title">Nenhum motivo para voltar antes</div>
                <div className="problem-text">Sem clube de fidelidade, seu cliente só volta quando o aparelho quebra — ou nunca mais. Não há benefício que o mantenha conectado à sua loja.</div>
              </div>
              <div className="problem-card">
                <div className="problem-n">03</div>
                <div className="problem-title">Concorrente chega na frente</div>
                <div className="problem-text">Enquanto você vende uma vez, o concorrente com clube fideliza, vende acessórios, serviços, seguros — e transforma 1 cliente em receita recorrente.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* HOW IT WORKS */}
      <section id="como">
        <div className="container">
          <p className="section-label">A solução</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: "700", maxWidth: "500px", lineHeight: "1.1", letterSpacing: "0.05em" }}>Como o Virtus App <span className="gold">transforma</span> sua loja</h2>
          <div className="divider"></div>
          <div className="how-grid">
            <div className="steps">
              <div className="step">
                <div className="step-num">1</div>
                <div>
                  <div className="step-title">Cliente baixa o app e se cadastra</div>
                  <div className="step-text">Gratuito, rápido e no nome da sua loja. Ele já começa com pontos de boas-vindas.</div>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div>
                  <div className="step-title">Acumula pontos em tudo</div>
                  <div className="step-text">Compras, manutenções, indicações e missões que geram prêmios de valor real.</div>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div>
                  <div className="step-title">Resgata prêmios e descontos</div>
                  <div className="step-text">Película, capinha, limpeza, fone Bluetooth, desconto na próxima compra — prêmios tangíveis que ele quer.</div>
                </div>
                <div className="step-connector"></div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div>
                  <div className="step-title">Assina o VIP e vira fã</div>
                  <div className="step-text">Pontos em dobro, cashback, limpeza mensal, sorteios exclusivos. Ele paga todo mês para ser seu cliente preferencial.</div>
                </div>
              </div>
            </div>
      
            <div className="how-visual">
              <div className="how-card">
                <div className="how-card-title">📊 Retorno estimado por cliente VIP / ano</div>
                <div className="roi-row"><span className="roi-label">Assinatura VIP Anual</span><span className="roi-val gold">+R$179,90</span></div>
                <div className="roi-row"><span className="roi-label">Recompras geradas pelo clube</span><span className="roi-val green">+R$840,00</span></div>
                <div className="roi-row"><span className="roi-label">Indicações (média 2 clientes)</span><span className="roi-val green">+R$320,00</span></div>
                <div className="roi-row"><span className="roi-label">Serviços de manutenção</span><span className="roi-val green">+R$480,00</span></div>
                <div style={{ height: "16px" }}></div>
                <div className="roi-total">
                  <span className="roi-total-label">Receita gerada por VIP / ano</span>
                  <span className="roi-total-val">R$1.819</span>
                </div>
              </div>
              <div className="how-card" style={{ background: "rgba(229,186,66,.06)", borderColor: "rgba(229,186,66,.2)" }}>
                <div className="how-card-title" style={{ color: "var(--gold)" }}>💡 Com 100 VIPs ativos</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "42px", fontWeight: "700", color: "var(--gold)", letterSpacing: "0.03em" }}>R$181.900</div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,.4)", marginTop: "4px" }}>de receita incremental por ano — apenas com clientes que já passaram pela sua loja.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* BENEFITS */}
      <section id="beneficios">
        <div className="container">
          <p className="section-label">Para o seu cliente</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: "700", maxWidth: "500px", lineHeight: "1.1", letterSpacing: "0.05em" }}>Benefícios que criam <span className="gold">vício de voltar</span></h2>
          <div className="divider"></div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">⭐</div>
              <div className="benefit-title">Pontos em tudo</div>
              <div className="benefit-text">Cada compra, manutenção, indicação e missão gera pontos. O cliente vê o valor crescer em tempo real.</div>
              <div className="benefit-tag">Core feature</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <div className="benefit-title">Virtus Care</div>
              <div className="benefit-text">A cada 5 manutenções, a 6ª é grátis até R$300. O cliente acompanha o progresso no app e tem motivo concreto para voltar.</div>
              <div className="benefit-tag">Diferencial exclusivo</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">👑</div>
              <div className="benefit-title">Clube VIP</div>
              <div className="benefit-text">3 planos de assinatura com descontos exclusivos, pontos em dobro, cashback, atendimento prioritário e sorteios mensais.</div>
              <div className="benefit-tag">Receita recorrente</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎁</div>
              <div className="benefit-title">Resgate de prêmios</div>
              <div className="benefit-text">Catálogo completo de recompensas: película, capinha, limpeza, fone Bluetooth, descontos. Pontos viram produto real.</div>
              <div className="benefit-tag">Retenção</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎰</div>
              <div className="benefit-title">Sorteios mensais VIP</div>
              <div className="benefit-text">Todo mês um prêmio exclusivo para assinantes VIP. iPhone, AirPods, acessórios. O cliente não cancela porque pode ganhar.</div>
              <div className="benefit-tag">Anti-churn</div>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔔</div>
              <div className="benefit-title">Notificações inteligentes</div>
              <div className="benefit-text">Push segmentado: lembrete de manutenção, pontos prestes a expirar, oferta exclusiva VIP, novidade no catálogo.</div>
              <div className="benefit-tag">Engajamento</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PLANS */}
      <section id="planos">
        <div className="container">
          <p className="section-label">Planos VIP</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: "700", maxWidth: "500px", lineHeight: "1.1", letterSpacing: "0.05em" }}>Escolha o plano <span className="gold">certo pra você</span></h2>
          <div className="divider"></div>
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-name">VIP Mensal</div>
              <div className="plan-price"><span>R$</span>19,90</div>
              <div className="plan-period">por mês</div>
              <div className="plan-economy">&nbsp;</div>
              <div className="plan-divider"></div>
              <div className="plan-feature">Todos os benefícios VIP</div>
              <div className="plan-feature">Pontos em dobro</div>
              <div className="plan-feature">Limpeza mensal</div>
              <div className="plan-feature">Atendimento prioritário</div>
              <div className="plan-feature">Sorteios mensais</div>
              <a href="https://wa.me/5521986422434?text=Olá!%20Fiquei%20interessado%20no%20plano%20VIP%20Mensal%20do%20VirtusApp." target="_blank" rel="noopener noreferrer" className="plan-btn outline">Assinar mensal</a>
            </div>
            <div className="plan-card featured">
              <div className="plan-popular">Mais popular</div>
              <div className="plan-name">VIP Semestral</div>
              <div className="plan-price"><span>R$</span>99,90</div>
              <div className="plan-period">a cada 6 meses</div>
              <div className="plan-economy">Economize R$19,50</div>
              <div className="plan-divider"></div>
              <div className="plan-feature">Todos os benefícios VIP</div>
              <div className="plan-feature">Pontos em dobro</div>
              <div className="plan-feature">Limpeza mensal</div>
              <div className="plan-feature">Atendimento prioritário</div>
              <div className="plan-feature">Sorteios mensais</div>
              <a href="https://wa.me/5521986422434?text=Olá!%20Fiquei%20interessado%20no%20plano%20VIP%20Semestral%20do%20VirtusApp." target="_blank" rel="noopener noreferrer" className="plan-btn gold">Assinar semestral</a>
            </div>
            <div className="plan-card">
              <div className="plan-name">VIP Anual</div>
              <div className="plan-price"><span>R$</span>179,90</div>
              <div className="plan-period">por ano</div>
              <div className="plan-economy">Economize R$58,90</div>
              <div className="plan-divider"></div>
              <div className="plan-feature">Todos os benefícios VIP</div>
              <div className="plan-feature">Pontos em dobro</div>
              <div className="plan-feature">Limpeza mensal</div>
              <div className="plan-feature">Atendimento prioritário</div>
              <div className="plan-feature">Sorteios mensais</div>
              <a href="https://wa.me/5521986422434?text=Olá!%20Fiquei%20interessado%20no%20plano%20VIP%20Anual%20do%20VirtusApp." target="_blank" rel="noopener noreferrer" className="plan-btn outline">Assinar anual</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* REWARDS */}
      <section id="premios">
        <div className="container">
          <p className="section-label">Catálogo de prêmios</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,48px)", fontWeight: "700", maxWidth: "500px", lineHeight: "1.1", letterSpacing: "0.05em" }}>Pontos que viram <span className="gold">produtos reais</span></h2>
          <div className="divider"></div>
          <div className="rewards-grid">
            <div className="reward-card"><div className="reward-emoji">📱</div><div className="reward-name">Película Premium</div><div className="reward-pts">100 pontos</div></div>
            <div className="reward-card"><div className="reward-emoji">🛡️</div><div className="reward-name">Capinha Premium</div><div className="reward-pts">200 pontos</div></div>
            <div className="reward-card"><div className="reward-emoji">✨</div><div className="reward-name">Limpeza Premium</div><div className="reward-pts">300 pontos</div></div>
            <div className="reward-card"><div className="reward-emoji">🔌</div><div className="reward-name">Carregador Turbo</div><div className="reward-pts">400 pontos</div></div>
            <div className="reward-card"><div className="reward-emoji">🎧</div><div className="reward-name">Fone Bluetooth</div><div className="reward-pts">600 pontos</div></div>
            <div className="reward-card"><div className="reward-emoji">💰</div><div className="reward-name">Desconto R$50</div><div className="reward-pts">1.000 pontos <span>na próxima compra</span></div></div>
          </div>
        </div>
      </section>
      
      {/* ADMIN */}
      <section id="admin">
        <div className="container">
          <div className="admin-wrap">
            <div>
              <p className="section-label">Para o dono da loja</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,42px)", fontWeight: "700", lineHeight: "1.15", marginBottom: "16px", letterSpacing: "0.05em" }}>Painel completo para <span className="gold">você controlar tudo</span></h2>
              <div className="divider"></div>
              <div className="admin-features">
                <div className="admin-feature">
                  <div className="admin-feature-icon">📊</div>
                  <div><div className="admin-feature-title">Dashboard em tempo real</div><div className="admin-feature-text">Clientes cadastrados, VIPs ativos, pontos emitidos e faturamento — tudo em uma tela.</div></div>
                </div>
                <div className="admin-feature">
                  <div className="admin-feature-icon">🎯</div>
                  <div><div className="admin-feature-title">Segmentação de público</div><div className="admin-feature-text">Envie notificações para todos, apenas VIPs, por região ou comportamento de compra.</div></div>
                </div>
                <div className="admin-feature">
                  <div className="admin-feature-icon">⏰</div>
                  <div><div className="admin-feature-title">Agendamento de notificações</div><div className="admin-feature-text">Programe campanhas para a hora certa. O cliente certo, na mensagem certa, no momento certo.</div></div>
                </div>
                <div className="admin-feature">
                  <div className="admin-feature-icon">📈</div>
                  <div><div className="admin-feature-title">Relatórios completos</div><div className="admin-feature-text">Vendas, pontos emitidos, engajamento, taxa de conversão VIP — dados para decisões reais.</div></div>
                </div>
                <div className="admin-feature">
                  <div className="admin-feature-icon">🎰</div>
                  <div><div className="admin-feature-title">Gestão de sorteios</div><div className="admin-feature-text">Crie, gerencie e divulgue sorteios mensais para manter o engajamento VIP no máximo.</div></div>
                </div>
              </div>
            </div>
      
            {/* Dashboard mockup */}
            <div className="dashboard">
              <div className="dash-header">Dashboard</div>
              <div className="dash-metrics">
                <div className="dash-metric">
                  <div className="dash-metric-label">Clientes cadastrados</div>
                  <div className="dash-metric-val">5.249</div>
                  <div className="dash-metric-delta">↑ +12% este mês</div>
                </div>
                <div className="dash-metric">
                  <div className="dash-metric-label">VIPs ativos</div>
                  <div className="dash-metric-val">1.032</div>
                  <div className="dash-metric-delta">↑ +8% este mês</div>
                </div>
                <div className="dash-metric">
                  <div className="dash-metric-label">Pontos emitidos</div>
                  <div className="dash-metric-val">245.780</div>
                  <div className="dash-metric-delta">↑ +15% este mês</div>
                </div>
                <div className="dash-metric">
                  <div className="dash-metric-label">Faturamento VIP</div>
                  <div className="dash-metric-val" style={{ fontSize: "16px", marginTop: "4px" }}>R$20.680</div>
                  <div className="dash-metric-delta">↑ +18% este mês</div>
                </div>
              </div>
              <div className="dash-chart">
                <div className="dash-chart-label">Novos clientes — últimos 7 dias</div>
                <div className="dash-bars">
                  <div className="dash-bar" style={{ height: "40%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "40%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".5" }}></div></div>
                  <div className="dash-bar" style={{ height: "55%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "55%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".6" }}></div></div>
                  <div className="dash-bar" style={{ height: "45%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "45%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".55" }}></div></div>
                  <div className="dash-bar" style={{ height: "70%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "70%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".7" }}></div></div>
                  <div className="dash-bar" style={{ height: "60%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "60%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".65" }}></div></div>
                  <div className="dash-bar" style={{ height: "85%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "85%", background: "var(--gold)", borderRadius: "3px 3px 0 0", opacity: ".8" }}></div></div>
                  <div className="dash-bar" style={{ height: "100%" }}><div style={{ position: "absolute", bottom: "0", left: "0", right: "0", height: "100%", background: "var(--gold)", borderRadius: "3px 3px 0 0" }}></div></div>
                </div>
              </div>
              <div className="dash-activity">
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,.35)", marginBottom: "6px" }}>ÚLTIMAS ATIVIDADES</div>
                <div className="dash-act-item"><div className="dash-act-avatar">CS</div><div className="dash-act-info"><div className="dash-act-name">Camila Silva</div><div className="dash-act-action">Comprou iPhone 15</div></div><div className="dash-act-pts">+300 pts</div></div>
                <div className="dash-act-item"><div className="dash-act-avatar">JS</div><div className="dash-act-info"><div className="dash-act-name">João Santos</div><div className="dash-act-action">Manutenção realizada</div></div><div className="dash-act-pts">+150 pts</div></div>
                <div className="dash-act-item"><div className="dash-act-avatar">MO</div><div className="dash-act-info"><div className="dash-act-name">Maria Oliveira</div><div className="dash-act-action">Assinou VIP Anual</div></div><div className="dash-act-pts">+500 pts</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section id="cta">
        <div className="cta-bg"></div>
        <div className="container">
          <div className="cta-inner">
            <div className="tag">Próximo passo</div>
            <h2 className="cta-h">Pronto para transformar sua loja com o <span className="gold">Virtus App</span>?</h2>
            <p className="cta-sub">
              O Virtus App vai ajudar sua empresa a criar uma base de clientes fiéis, recorrentes e conectados à sua marca através de uma experiência premium e inteligente.
              <br /><br />
              E aí... Vamos transformar seus clientes em compradores recorrentes a partir de hoje?
            </p>
            <div className="cta-btns">
              <a href="https://wa.me/5521986422434?text=Fiquei%20interessado%20na%20sua%20proposta%20pra%20cria%C3%A7%C3%A3o%20do%20nosso%20Aplicativo%20VirtusApp" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "15px", padding: "16px 32px" }}>Agendar demonstração</a>
              <a href="https://wa.me/5521986422434?text=Fiquei%20interessado%20na%20sua%20proposta%20pra%20cria%C3%A7%C3%A3o%20do%20nosso%20Aplicativo%20VirtusApp" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: "15px", padding: "16px 32px" }}>Falar pelo WhatsApp</a>
            </div>
            <div className="cta-badges">
              <div className="cta-badge">App no seu nome</div>
              <div className="cta-badge">Suporte completo</div>
              <div className="cta-badge">Resultado em 30 dias</div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
