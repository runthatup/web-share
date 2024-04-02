"use client";

import { colors } from "@/src/theme/colors";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Header = () => {
  return (
    <Flex
      direction="column"
      w="100%"
      margin="auto"
      overflowX={{ sm: "scroll", lg: "hidden" }}
      align="center"
      paddingBottom="50px"
    >
    <Flex
        align="center"
        justify="space-between"
        w="100%"
        h={80}
        px="22px"
      >
        <Text color={colors.primary} fontSize="x-large" fontWeight="600">
          runthatup
        </Text>
        <Flex gap={8}>
          <Link href="https://runthatup.com/#about">
            <Text variant="action">About Us</Text>
          </Link>
          <Link href="https://runthatup.com/#contact">
            <Text variant="action">Contact</Text>
          </Link>
          <Link href="https://runthatup.com/#privacy">
            <Text variant="action">Privacy</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};