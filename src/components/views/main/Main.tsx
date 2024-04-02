"use client";
import React from 'react';
import Head from 'next/head';
import { Box, Heading, Text, Stack, Grid, GridItem } from '@chakra-ui/react';
import Config from '@/src/config';
import { IPhone } from '../../iphone';
import { MobileStoreButton } from '../../button';

export const Main = () => {
  return (
    <>
      <Head>
        <title>runthatup</title>
        <meta name="description" content="Run on your own time." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid
        templateColumns={['1fr', '1fr', '1fr 1fr']}
        templateAreas={[
          `"iphone" "content"`,
          `"iphone" "content"`,
          `"content iphone"`
        ]}
        gap={[8, 8, 12]}
        alignItems="center"
        px={[4, 8, 16]}
      >
        <GridItem area="content">
          <Box width={['100%', '100%', '80%']}>
            <Heading as="h1" size="2xl" mb={2}>
              Run on your own time.
            </Heading>
          </Box>
          <Box width={['80%', '80%', '80%']}>
            <Text fontSize="small" mb={4}>
              Lace up, log in, and join the running revolution! Click below to download the app for free and become part of our vibrant running community today.
            </Text>
          </Box>
          <Stack direction={['column', 'row']} spacing={4}>
            <MobileStoreButton store="ios" url={Config.appStoreUrl} height={75} width={255} />
          </Stack>
        </GridItem>
        <GridItem>
          <Box padding={['50px 0', '50px 0', '0']}>
            <IPhone />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};