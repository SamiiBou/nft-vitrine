import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
// import { Link } from 'react-scroll';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

interface SectionProps {
  title: string;
  content: string;
  nextSection?: string;
}

const Section: React.FC<SectionProps> = ({ title, content, nextSection }) => {
  return (
    <Box
      id={title.toLowerCase()}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        : nextSection ? '#1e1e1e' : '#0d0d0d',
        borderBottom: '1px solid #333',
      }}
    >
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {content}
      </Typography>
      {nextSection && (
        // <Link to={nextSection.toLowerCase()} smooth={true} duration={500}>
          <IconButton color="primary" aria-label="scroll down">
            <ArrowDownwardIcon />
          </IconButton>
        // </Link>
      )}
    </Box>
  );
};

export default Section;
