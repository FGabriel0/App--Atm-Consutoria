import { StackScreenProps } from '@react-navigation/stack';

       export type RootParamsList = {
            CenaCliente: undefined
            CenaPrincipal: undefined
            CenaContato:undefined
            CenaEmpresa:undefined
            CenaServico: undefined
        }
    

export type CenaPrincipalProps = StackScreenProps<RootParamsList, 'CenaPrincipal'>;
export type CenaClienteProps = StackScreenProps<RootParamsList, 'CenaCliente'>;
export type CenaContatoProps = StackScreenProps<RootParamsList, 'CenaContato'>;
export type CenaEmpresaProps = StackScreenProps<RootParamsList, 'CenaEmpresa'>;
export type CenaServicoProps = StackScreenProps<RootParamsList, 'CenaServico'>;