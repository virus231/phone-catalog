import Head from 'next/head';
import { Box } from '@mui/system';
import { Container } from '@mui/material';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';

export type LayoutProps = {
    title?: string
    keywords?: string
    description?: string
    children?: React.ReactNode | React.ReactNodeArray
}

export function Layout({ title, keywords, description, children }: LayoutProps) {
    // const classes = useStyles();

    return <Box position="absolute" top={0} bottom={0} left={0} right={0}>
        <Head>
            <title>{title}</title>
            {keywords ? <meta name="keywords" content={keywords} /> : null}
            {description ? <meta name="description" content={description} /> : null}
            <link rel="icon" href="/static/favicon.ico" />
        </Head>
        <Box>
            <Navigation/>
            <Box flex={1} mb={3} position="relative">
                <Container maxWidth="lg">
                    <>{children}</>
                </Container>
            </Box>
            <Box>
                <Footer/>
            </Box>
        </Box>
    </Box>
}
