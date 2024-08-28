
import CookieBanner from "../cockiebanner/Cokckiebanner";
import Navbar from "../navbar/Navbar";

import "./Homeapp.css";
import { Link } from "react-router-dom";

function HomeApp() {
  return (
    <>
     <CookieBanner></CookieBanner>
    <div className="homeAppContainer">
    <p className="titleWellcome">Bem Vindo ao StockTag <span className="veroColor">Vero</span></p>
    
      <div className="containerBtnItens">
        <p className="cityTittle">Andradina</p>
        <div className="containetBtn">
          
        <button className="btnStockTag">
      <Link to="/andsmall" className="linkadd">
          <p className="StockTagTittle">StockTag 3cm</p>
          <p className="StockTagSubtittle">Pequena</p>
      </Link>
          </button>

        <button className="btnStockTagDisable">
          
          <p className="StockTagTittle">Manutenção</p>
          <p className="StockTagSubtittle">Desabilitado</p>
          </button>

        <button className="btnStockTagDisable">
          
          <p className="StockTagTittle">Manutenção</p>
          <p className="StockTagSubtittle">Desabilitado</p>
        
          </button>
    
        </div>


        <p className="cityTittle">Campo Grande</p>
        <div className="containetBtn">
          
        <button className="btnStockTag">
        <Link to="/cgsmall" className="linkadd">
          <p className="StockTagTittle">StockTag 3cm</p>
          <p className="StockTagSubtittle">Pequena</p>
          </Link>
          </button>

        <button className="btnStockTag">
        <Link to="/cgbig" className="linkadd">

          <p className="StockTagTittle">StockTag 6cm</p>
          <p className="StockTagSubtittle">Grande</p>
          </Link>
          </button>
             
        <button className="btnStockTagDisable">
          
          <p className="StockTagTittle">Manutenção</p>
          <p className="StockTagSubtittle">Desabilitado</p>
          </button>
        </div>
        <p className="cityTittle">Três Lagoas</p>
        <div className="containetBtn">
          
        <button className="btnStockTag">
          <Link to="/tlssmall" className="linkadd">
          <p className="StockTagTittle">StockTag 3cm</p>
          <p className="StockTagSubtittle">Pequena</p>
          </Link>
          </button>

          
          <button className="btnStockTagDisable">
          <p className="StockTagTittle">Manutenção</p>
          <p className="StockTagSubtittle">Desabilitado</p>
          </button>

    
             
        <button className="btnStockTagDisable">
          <p className="StockTagTittle">Manutenção</p>
          <p className="StockTagSubtittle">Desabilitado</p>
          </button>
        </div>
        <div className="linkdinBody">

   
</div>
      </div>
   
    </div>
    <Navbar></Navbar>
    </>
  )
}

export default HomeApp
