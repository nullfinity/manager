import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme } from 'src/components/core/styles';
import Button from 'src/components/Button/Button.tsx';

const useStyles = makeStyles((theme: Theme) => ({
  btnRoot: {
    ...theme.applyLinkStyles,
    padding: '12px 10px',
    minWidth: 0,

    '&:hover': {
      backgroundColor: '#3683dc',
      color: theme.color.white
    },
    '&[disabled]': {
      color: '#cdd0d5',
      cursor: 'default',
      '&:hover': {
        backgroundColor: 'inherit'
      }
    }
  },
  linkRoot: {
    textAlign: 'center',
    '&:hover': {
      backgroundColor: '#3683dc',
      '& span': {
        color: theme.color.white
      }
    },
    '& span': {
      color: '#3683dc'
    }
  }
}));

interface Props {
  actionText: string;
  className?: string;
  href?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

type CombinedProps = Props;

const InlineMenuAction: React.FC<CombinedProps> = props => {
  const { actionText, className, href, disabled, onClick, loading } = props;

  const classes = useStyles();

  if (href) {
    return (
      <Link className={`${className} ${classes.linkRoot}`} to={href}>
        <span>{actionText}</span>
      </Link>
    );
  } else {
    return (
      <Button
        className={`${className} ${classes.btnRoot}`}
        onClick={onClick}
        disabled={disabled}
        loading={loading}
      >
        {actionText}
      </Button>
    );
  }
};

export default InlineMenuAction;
