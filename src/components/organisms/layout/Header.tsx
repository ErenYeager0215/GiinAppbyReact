import { FC, memo } from "react";
import React from "react";
import { Flex, Heading, Link, Box, IconButton,useDisclosure,Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'

export const Header: FC = memo(() => {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <>
    <Flex
      as="nav"
      bg="#59C1BD"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      {/* breakepointに応じたfontSize */}
      {/* 今回の指定は、baseの時はmdサイズ、md以上になったらlgサイズのフォントになるようにレスポンシブする */}
      {/* https://chakra-ui.com/docs/styled-system/theme#breakpoints */}
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          船橋市議会アプリ
        </Heading>
      </Flex>

      {/* モバイルファーストなのでdesplayでbaseの時はモバイルサイズを指す */}
      {/* モバイルサイズ時はメニューバーを非表示、モバイルサイズ以上の時にdesplay:flexが適応される */}
      <Flex
        align="center"
        fontSize={"sm"}
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>議員一覧</Link>
        </Box>
        <Link>質問一覧</Link>
        <Link>データ</Link>
      </Flex>
      <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        variant="outline"
        size="md"
        display={{base:"block",md:"none"}}
        onClick={onOpen}        
      />
    </Flex>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}        
      >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody p={0} bg="gray.100">
        <Button w="100%">議員一覧</Button>
        <Button w="100%">質問一覧</Button>
        <Button w="100%">データ</Button>        
        </DrawerBody>
      </DrawerContent>
    </Drawer>
    </>
  );
});
