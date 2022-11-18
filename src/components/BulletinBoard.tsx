import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { SyntheticEvent, useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from 'axios';

type Information = {
  id: number;
  title: string;
  description: string;
};

const BulletinBoard = () => {
  const [expanded, setExpanded] = useState<number | false>(false);
  const [information, setInformation] = useState<Information[]>();

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:5000/information');
      setInformation(response.data);
    })();
  }, []);

  const handleExpand = (panel: number) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Typography variant="h4">Bulletin Board</Typography>
      {information?.map((inf) => (
        <Accordion key={inf.id} expanded={expanded === inf.id} onChange={handleExpand(inf.id)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{inf.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{inf.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default BulletinBoard;
