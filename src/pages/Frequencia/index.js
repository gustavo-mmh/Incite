import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Dashboard/Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Frequencia() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Frequência de Conexão</Title>
      <Typography component="p" variant="h4">
        3,024.00 acessos
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2020
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
