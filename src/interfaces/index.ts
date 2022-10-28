import React, { ReactNode } from "react";

export interface Ichildren {
  children: ReactNode;
}

export interface Iprops extends Ichildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  [props: string]: any;
}

export interface Iproduct {
  data: {
    status?: string;
    titulo: string;
    ano: string;
    quilometragem: string;
    valor: string;
    descricao: string;
    veiculo: string;
    capa: string;
    usuario: string;
  }
}

export interface Iauction {
  data: {
    prazo: string;
    titulo: string;
    ano: string;
    quilometragem: string;
    valor: string;
    descricao: string;
    veiculo: string;
    capa: string;
    usuario: string;
  }
}