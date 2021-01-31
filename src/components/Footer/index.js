import React from "react";
import "../../styles/footer.css";
import github from '../../../src/assets/img/github-logo.png';

export default function Footer() {
    return (
        <div className="footer col-12">
            <div className="footer__content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>MCMM|<b>mi</b> 2020/2021</h2>
                            <p>
                                Miniprojeto desenvolvido no âmbito do Mestrado em Comunicação Multimédia, na unidade
                                curricular de Tecnologias Dinâmicas para a Internet (1º ano), do ramo interativo.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Temática do Desafio</h2>
                            <p>
                                Criar uma aplicação de frontend para consumir e visualizar informação proveniente de uma qualquer fonte pública de
                                dados. <br />Tecnologias usadas: React + Redux.
                                </p>
                        </div>
                        <div className="col-md-4">
                            <h2>GitHub</h2>
                            <p>
                                Repositório com o código do projeto: <a href="https://github.com/mcmm-mi/tdi-mp1-andreia-ferreira" target="_blank" rel="noopener noreferrer">
                                    <img className="github" src={github} alt="github" />
                                </a>
                                <br /><b>Universidade de Aveiro</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-xs-12 mx-auto">
                    <p className="text-footer">Andreia de Castro Ferreira | <b style={{ color: '#dba90d' }}>65791</b></p>
                </div>
            </div>
        </div>
    );
}