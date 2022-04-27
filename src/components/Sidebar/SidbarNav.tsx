import { Icon, Link, Stack, Text } from "@chakra-ui/react";
import { RiLayout4Fill, RiUserFill, RiFileCopy2Fill, RiFileEditFill, RiPieChartFill, RiEditBoxFill } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" width='250px' align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiLayout4Fill} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiFileCopy2Fill} href="/atlas">Atlas Toponímico</NavLink>
        <NavLink icon={RiPieChartFill} href="/graphs">Gerar gráficos</NavLink>
        <NavLink icon={RiEditBoxFill} href="/admin-blog">Blog</NavLink>
        <NavLink icon={RiUserFill} href="/users">Usuários</NavLink>
        <NavLink icon={RiFileEditFill} href="/registers">Registros</NavLink>
      </NavSection>
      {/* <NavSection title="AJUSTES">
        <NavLink icon={RiHandCoinLine} href="/caixa">Caixa</NavLink>
        <NavLink icon={RiFileList3Line} href="/reports">Relatórios</NavLink>
      </NavSection> */}
    </Stack>
  )
}