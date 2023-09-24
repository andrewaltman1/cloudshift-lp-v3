import Box from '@mui/material/Box';
import Image from 'next/image';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import awstocloudflare from './assets/awstocloudflare_cropped.png';
import awstoazure from './assets/awstoazure_cropped.png';
import screenshot from './assets/screenshot_cropped.png';

const articles = [{ heading: 'Changing Providers', body: 'Currently, cloud-to-cloud migration is a major pain point of modern internet infrastructure even though solutions like rsync/rclone already exist. While they offer all the configuration options that experienced developers need, they are far from simple.', image: awstoazure, altText: 'cloud migration graphic' }, { heading: 'Streamling The Process', body: 'At CloudShift we simplify your cloud data transfer process. Select your current cloud data platform along with your destination site and we will take care of the rest.  All files are encrypted for your privacy.', image: awstocloudflare, altText: 'cloud migration graphic' }, { heading: 'One (UI) And Done', body: 'CloudShift doesn’t require the user to interact with a CLI, making it less intimidating for the average person and most importantly, more accessible. Clients only need prompted credentials, then they simply select which bucket to transfer. CloudShift takes care of the rest.', image: screenshot, altText: 'CloudShift screenshot' }]

const Articles = () => {
    return (
        <>
            <Box key={"articles-small"} sx={{ color: '#272839', display: { xs: 'flex', md: 'none' }, flexFlow: 'column nowrap' }}>{articles.map((article) => <Box key={article.heading} sx={{
                width: '100%',
                height: '70vh',
                display: 'flex',
                flexFlow: 'column nowrap',
                justifyContent: 'space-evenly',
                alignItems: 'center',
            }
            }>
                <Typography variant="h4" sx={{ textAlign: 'center', padding: '0 2rem', fontFamily: 'Cabin, sans-serif' }}>{article.heading}
                </Typography>
                <Typography variant="body1" sx={{ width: "75%", textAlign: 'center', padding: '0 1rem', fontFamily: 'Cabin, sans-serif' }}>
                    {article.body}
                </Typography>
                <Image alt={article.altText} src={article.image} style={{ width: '17rem', height: '11.33rem', borderRadius: '10px', boxShadow: '0px 0px 7px 0px #2278ab44' }} priority={`${article.image === awstoazure && true}`}>
                </Image>
            </Box>
            )}
            </Box>
            <Box key={"articles-large"} sx={{ color: '#272839', display: { xs: 'none', md: 'flex' }, flexFlow: 'column nowrap' }}>{articles.map((article) =>
                <Container key={article.heading} >
                    <Box sx={{
                        width: '100%',
                        height: '50vh',
                        display: 'flex',
                        flexFlow: 'row nowrap',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                    }
                    }>
                        <Box sx={{ width: '40%', height: '90%', display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', fontFamily: 'Cabin, sans-serif' }}>  {article.heading}
                            </Typography>
                            <Image alt={article.altText} src={article.image} style={{ width: '17rem', height: '11.33rem', borderRadius: '10px', boxShadow: '0px 0px 10px 0px #2278ab44' }}>
                            </Image>
                        </Box>
                        <Typography variant="body1" sx={{ boxSizing: 'border-box', width: '40%', height: 'fit-content', textAlign: 'center', padding: '0 2rem', fontFamily: 'Cabin, sans-serif' }}>
                            {article.body}
                        </Typography>
                    </Box >
                </Container>
            )}
            </Box>
        </>
    )
}

export default Articles