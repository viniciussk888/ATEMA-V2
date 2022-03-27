import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { useUserSession } from "../../contexts/UserContext";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile ({ showProfileData = true }: ProfileProps) {
  const {email,user} = useUserSession()
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user.username}</Text>
          <Text color="gray.300" fontSize="small">{email}</Text>
        </Box>
      )}

      <Avatar size="md" name="Vinicius Martins" />
    </Flex>
  )
}