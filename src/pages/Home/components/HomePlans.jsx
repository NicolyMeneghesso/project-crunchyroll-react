import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { plans } from "../data/plans";

import "./HomePlans.css";

function HomePlans() {
  const [billingPeriod, setBillingPeriod] = useState("annual");

  return (
    <section className="home-plans" id="plans">
      <div className="home-plans-container">
        <div className="home-plans-content">
          <header className="home-plans-heading">
            <h2 className="home-plans-title">Escolha Seu Premium</h2>
          </header>

          <div className="home-plans-body">
            <div className="home-plans-toggle" role="group" aria-label="Período de cobrança">
              <Button
                variant="link"
                className={`home-plans-toggle-option ${billingPeriod === "monthly" ? "active" : ""
                  }`}
                aria-pressed={billingPeriod === "monthly"}
                onClick={() => setBillingPeriod("monthly")}
              >
                Mensal
              </Button>

              <Button
                variant="link"
                className={`home-plans-toggle-option ${billingPeriod === "annual" ? "active" : ""
                  }`}
                aria-pressed={billingPeriod === "annual"}
                onClick={() => setBillingPeriod("annual")}
              >
                <span>Anual</span>
                <small>Economize 40%</small>
              </Button>
            </div>

            <div className="home-plans-grid">
              {plans.map((plan) => (
                <Card key={plan.id} className="home-plan-card">
                  <Card.Body className="home-plan-card-body">
                    <div className="home-plan-head">

                      <div className="home-plan-best-deal">
                        {billingPeriod === "annual" && (
                          <>
                            <span aria-hidden="true">✦</span>
                              Pague em parcelas
                            <span aria-hidden="true">✦</span>
                          </>
                        )}

                        {billingPeriod === "monthly" && plan.bestDeal && (
                          <>
                            <span aria-hidden="true">✦</span>
                              O mais popular
                            <span aria-hidden="true">✦</span>
                          </>
                        )}
                      </div>

                      <h3 className="home-plan-name">
                        {plan.name}
                      </h3>

                      <div className="home-plan-pricing">
                        {billingPeriod === "annual" ? (
                          <>
                            <p className="home-plan-price">
                              {plan.annualPrice}
                            </p>

                            <p className="home-plan-monthly-equivalent">
                              ({plan.monthlyEquivalent})
                            </p>
                          </>
                        ) : (
                          <p className="home-plan-price">
                            {plan.monthlyPrice}
                          </p>
                        )}

                        <small className="home-plan-taxes">
                          + Taxas e Impostos
                        </small>
                      </div>
                    </div>

                    <div className="home-plan-actions">
                      <Button
                        variant="primary"
                        className="home-plan-button home-plan-button--primary"
                        onClick={() =>
                          console.log(`Teste grátis: ${plan.name}`)
                        }
                      >
                        Comece um teste grátis de 7 dias
                      </Button>

                      <Button
                        variant="link"
                        className="home-plan-button home-plan-button--secondary"
                        onClick={() =>
                          console.log(`Pular teste: ${plan.name}`)
                        }
                      >
                        Pular teste gratuito
                      </Button>
                    </div>

                    <ul className="home-plan-benefits">
                      {plan.benefits.map((benefit, index) => (
                        <li key={`${plan.id}-${index}`}>
                          <svg
                            className="home-plan-check"
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                          >
                            <path d="M7 12a1 1 0 0 1-.707-.293l-3-3a.999.999 0 1 1 1.414-1.414l2.226 2.226 4.3-5.16a1 1 0 1 1 1.535 1.28l-5 6.001A1 1 0 0 1 7 12" />
                          </svg>

                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>

          <div className="home-plans-legal">
            <small>
              *Os planos podem incluir trailers e mensagens promocionais
              sobre conteúdos, serviços ou produtos relacionados à
              Crunchyroll.
            </small>

            <small>
              A oferta de teste gratuito é válida para novos assinantes
              elegíveis. A assinatura renova automaticamente ao fim do
              período de teste, pelo valor indicado no plano selecionado.
              Cancele a qualquer momento. Restrições e outras condições
              se aplicam. Preços, conteúdos e funcionalidades sujeitos
              a alterações.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePlans;
