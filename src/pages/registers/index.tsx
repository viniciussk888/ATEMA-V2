import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Layout } from '../../components/Layout';
import {PainelRegister} from '../../components/PainelRegister';

const Registers: React.FC = () => {
    const [isWideVersion, setisWideVersion] = useState(false)
    const size = useBreakpointValue({
      base: false,
      lg: true,
    })
  
    useEffect(() => {
      setisWideVersion(size)
    }, [size])
    const registers = [
        {
        created_at: "oaidhad",
        id: 2,
        name: 'oiposhf',
        updated_at: 'aouhdauh',
        }
    ]
    return (
        <Layout>
            <Flex flexDirection={isWideVersion? 'row' : 'column'} justifyContent="space-between" flexWrap="wrap">
            <PainelRegister title='ELEMENTOS GEOGRÁFICOS' registers={registers}/>
            <PainelRegister title='LÍNGUAS DE ORIGENS' registers={registers}/>
            <PainelRegister title='ETIMOLOGIAS' registers={registers}/>
            <PainelRegister title='TAXONOMIAS' registers={registers}/>
            </Flex>
        </Layout>
    );
}

export default Registers;