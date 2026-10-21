import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { plans } from "../data/plans";
import IconPlans from "../assets/IconPlans";
import CheckPlans from "../assets/CheckPlans";

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
                        <div className="home-plan-best-deal-content">
                          {(billingPeriod === "annual" || plan.bestDeal) && (
                            <>
                              <span aria-hidden="true">
                                <IconPlans />
                              </span>

                              <span className={billingPeriod === "annual" ? "" : "home-plan-best-deal-uppercase"}>
                                {billingPeriod === "annual" ? "Pague em parcelas" : "O mais popular"}
                              </span>

                              <span aria-hidden="true">
                                <IconPlans />
                              </span>
                            </>
                          )}
                        </div>
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
                      <Button variant="primary"
                        className={`home-plan-button home-plan-button--primary ${plan.id === "fan"
                            ? "home-plan-button--outline"
                            : "home-plan-button--filled"
                          }`}
                        onClick={() => console.log(`Teste grátis: ${plan.name}`)}
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
                          <CheckPlans />
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
              *Os planos podem incluir trailers e mensagens promocionais sobre o conteúdo e os serviços do Crunchyroll,
              ou sobre produtos relacionados.
            </small>

            <small>
              Oferta de testes gratuita válida para novos assinantes elegíveis.
              Plano se renova automaticamente ao fim do período de testes, pelo valor indicado no plano selecionado.
              Cancele a qualquer momento. Restrições e outras condições se aplicam.
              Preço, conteúdo e funcionalidades sujeitas a alteração.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePlans;