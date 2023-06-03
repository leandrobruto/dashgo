import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Leandro Bruto</Text>
                <Text color="gray.300" fontSize="small">
                leandrobruto42@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Leandro Bruto" src="https://github.com/leandrobruto.png" />
        </Flex>    
    );
}