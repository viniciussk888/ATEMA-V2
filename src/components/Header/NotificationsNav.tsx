import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiLogoutBoxLine } from "react-icons/ri";
import { useUserSession } from "../../contexts/UserContext";

export function NotificationsNav() {
  const { logout } = useUserSession()
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon cursor='pointer' onClick={logout} as={RiLogoutBoxLine} fontSize="20" color='black' />
    </HStack>
  )
}