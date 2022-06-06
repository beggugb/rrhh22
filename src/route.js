import { faFileArchive, faBuilding, faIndustry,  faCoins, faCopy, faFileAlt, faChartLine, faCashRegister, faMoneyCheckAlt, faBoxes, faCompressAlt , faBoxOpen, faStore, faUserTag, faPeopleArrows, faMoneyBill,  faUsers, faTachometerAlt, faMoneyCheck, faHandHoldingUsd, faHeadphones, faCogs } from "@fortawesome/free-solid-svg-icons";

import CrmInicio from "./pages/CRM/InicioView"
import Clientes from "./pages/CRM/Clientes/ClientesView"
import Cotizaciones from "./pages/CRM/Cotizaciones/Cotizaciones"
import Promociones from "./pages/CRM/Prospectos/Prospectos"
import Tickets from "./pages/CRM/Tickets/TicketsView"

import ComprasInicio from "./pages/COMPRAS/InicioView"
import Compras from "./pages/COMPRAS/Compras/Compras"
import Proveedores from "./pages/COMPRAS/Proveedores/ProveedoresView"
import Pagos from "./pages/COMPRAS/Pagos/Pagos"

import VentasInicio from "./pages/VENTAS/InicioView"
import Ventas from "./pages/VENTAS/Ventas/Ventas"
import Cobros from "./pages/VENTAS/Cobros/Cobros"

import InventariosInicio from "./pages/INVENTARIOS/InicioView"
import Articulos from "./pages/INVENTARIOS/Articulos/ArticulosView"
import Movimientos from "./pages/INVENTARIOS/Movimientos/Movimientos"
import Categorias from "./pages/INVENTARIOS/Categorias/CategoriasView"
import Marcas from "./pages/INVENTARIOS/Marcas/MarcasView"
import Unidades from "./pages/INVENTARIOS/Unidades/UnidadesView"

import TpdvInicio from "./pages/TPVD/Tpv/Tpv"
import Cajas from "./pages/TPVD/Cajas/CajasView"

import FinanzasInicio from "./pages/CONTABILIDAD/Contabilidad"
import Comprobantes from "./pages/CONTABILIDAD/Comprobantes/Comprobantes"
import PlanCuentas from "./pages/CONTABILIDAD/Pucs/PucsView"
import Libros from "./pages/CONTABILIDAD/Diarios/DiariosView"
import TipoCambio from "./pages/CONTABILIDAD/Tdc/TdcView"

import Usuarios from "./pages/SECURITY/Usuarios/UsuariosView"
import Sucursales from "./pages/SECURITY/Sucursales/SucursalesView"
import Empresa from "./pages/SECURITY/Empresa/EditEmpresa"

import RRHHInicio from "./pages/RRHH/InicioView"
import Personas from "./pages/RRHH/Personas/PersonasView"
import Contratos from "./pages/RRHH/Contratos/ContratosView"
import Departamentos from "./pages/RRHH/Departamentos/DepartamentosView"
import Registros from "./pages/RRHH/Registros/RegistrosView"





export const modulos = [   
    {        
        key        : 1,
        path       : "/inicio",
        name       : "Dashboard",
        component  : CrmInicio,
        layout     : "/crm",
        enabled    : true,
        icon       : faTachometerAlt,

    },
    {        
        key        : 12,
        path       : "/clientes",
        name       : "Clientes",
        component  : Clientes,
        layout     : "/crm",
        enabled    : true,
        icon       : faUsers,

    },
    {
        key        : 13,
        path       : "/cotizaciones",
        name       : "Cotizaciones",
        component  : Cotizaciones,
        layout     : "/crm",
        enabled    : true,
        icon       : faMoneyCheck
    },
    {
        key        : 14,
        path       : "/promociones",
        name       : "Promociones",
        component  : Promociones,
        layout     : "/crm",
        enabled    : true,
        icon       : faHandHoldingUsd
    },
    {
        key        : 15,
        path       : "/tickets",
        name       : "Tickets",
        component  : Tickets,
        layout     : "/crm",
        enabled    : true,
        icon       : faHeadphones
    },
    /**Compras Router */
    {        
        key        : 21,
        path       : "/inicio",
        name       : "Dashboard",
        component  : ComprasInicio,
        layout     : "/compras",
        enabled    : true,
        icon       : faTachometerAlt,

    },
    {
        key        : 22,
        path       : "/compras",
        name       : "Compras",
        component  : Compras,
        layout     : "/compras",
        enabled    : true,
        icon       : faPeopleArrows
    },
    {
        key        : 23,
        path       : "/proveedores",
        name       : "Proveedores",
        component  : Proveedores,
        layout     : "/compras",
        enabled    : true,
        icon       : faUserTag
    },
    {
        key        : 24,
        path       : "/pagos",
        name       : "Pagos",
        component  : Pagos,
        layout     : "/compras",
        enabled    : true,
        icon       : faMoneyBill
    },
    /**Ventas Router */
    {        
        key        : 31,
        path       : "/inicio",
        name       : "Dashboard",
        component  : VentasInicio,
        layout     : "/ventas",
        enabled    : true,
        icon       : faTachometerAlt,
    },
    {        
        key        : 32,
        path       : "/ventas",
        name       : "Ventas",
        component  : Ventas,
        layout     : "/ventas",
        enabled    : true,
        icon       : faStore
    },
    {        
        key        : 33,
        path       : "/cobros",
        name       : "Cobros",
        component  : Cobros,
        layout     : "/ventas",
        enabled    : true,
        icon       : faMoneyBill
    },
    {        
        key        : 34,
        path       : "/clientes",
        name       : "Clientes",
        component  : Clientes,
        layout     : "/ventas",
        enabled    : true,
        icon       : faUsers,

    },
    /**Inventarios Router */
    {        
        key        : 40,
        path       : "/inicio",
        name       : "Dashboard",
        component  : InventariosInicio,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faTachometerAlt,
    },
    {        
        key        : 41,
        path       : "/productos",
        name       : "Productos",
        component  : Articulos,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faBoxOpen,
    },
    {        
        key        : 42,
        path       : "/movimientos",
        name       : "Movimientos",
        component  : Movimientos,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faCompressAlt,
    },
    {        
        key        : 43,
        path       : "/utils",
        name       : "Categorias",
        component  : Categorias,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faBoxes,
    },
    {        
        key        : 44,
        path       : "/marcas",
        name       : "Marcas",
        component  : Marcas,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faBoxes,
    },
    {        
        key        : 45,
        path       : "/unidades",
        name       : "Unidades",
        component  : Unidades,
        layout     : "/inventarios",
        enabled    : true,
        icon       : faBoxes,
    },  
    /**TPDV Router */
    {        
        key        : 50,
        path       : "/tpdv",
        name       : "Punto de Venta",
        component  : TpdvInicio,
        layout     : "/tpdv",
        enabled    : true,
        icon       : faCashRegister,
    },
    {        
        key        : 51,
        path       : "/cajas",
        name       : "Cajas",
        component  : Cajas,
        layout     : "/tpdv",
        enabled    : true,
        icon       : faMoneyCheckAlt,
    },   
    /**Contabilidad Router */ 
    {        
        key        : 61,
        path       : "/inicio",
        name       : "Dashboard",
        component  : FinanzasInicio,
        layout     : "/finanzas",
        enabled    : true,
        icon       : faTachometerAlt,
    },
    {        
        key        : 62,
        path       : "/comprobantes",
        name       : "Comprobantes",
        component  : Comprobantes,
        layout     : "/finanzas",
        enabled    : true,
        icon       : faFileAlt,
    },
    {        
        key        : 63,
        path       : "/puc",
        name       : "Plan de Cuentas",
        component  : PlanCuentas,
        layout     : "/finanzas",
        enabled    : true,
        icon       : faCopy,
    },
    {        
        key        : 64,
        path       : "/tdc",
        name       : "Tipo de Cambio",
        component  : TipoCambio,
        layout     : "/finanzas",
        enabled    : true,
        icon       : faCoins,
    },
    {        
        key        : 65,
        path       : "/libros",
        name       : "Libros",
        component  : Libros,
        layout     : "/finanzas",
        enabled    : true,
        icon       : faChartLine,
    },
    /**Tools Router */     
    {        
        key        : 70,
        path       : "/empresa",
        name       : "Empresa",
        component  : Empresa,
        layout     : "/tools",
        enabled    : true,
        icon       : faIndustry,
    },
    {        
        key        : 71,
        path       : "/sucursales",
        name       : "Sucursales",
        component  : Sucursales,
        layout     : "/tools",
        enabled    : true,
        icon       : faBuilding,
    },
    {        
        key        : 72,
        path       : "/usuarios",
        name       : "Usuarios",
        component  : Usuarios,
        layout     : "/tools",
        enabled    : true,
        icon       : faUsers,
    },
  
    /**RRHH Router */     
    {        
        key        : 80,
        path       : "/inicio",
        name       : "Dashboard",
        component  : RRHHInicio,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faIndustry,
    },
    {        
        key        : 81,
        path       : "/personas",
        name       : "Personas",
        component  : Personas,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faUsers,
    },
    {        
        key        : 82,
        path       : "/contratos",
        name       : "Contratos",
        component  : Contratos,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faFileArchive,
    },    
    {        
        key        : 83,
        path       : "/registros",
        name       : "Asistencia",
        component  : Registros,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faFileArchive,
    },
    {        
        key        : 84,
        path       : "/datos",
        name       : "Datos",
        component  : Departamentos,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faCogs,
    },
    /*        
        key        : 85,
        path       : "/evaluaciones",
        name       : "Evaluaciones",
        component  : Evaluaciones,
        layout     : "/rrhh",
        enabled    : true,
        icon       : faCogs,
    },*/
    
   

]   