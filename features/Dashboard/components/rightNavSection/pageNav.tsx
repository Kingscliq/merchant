import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import { Link, LinkItem } from './';
import { Stack, Heading } from '@/components';

export const PageNav = () => {
  return (
    <div style={{ width: 'max-content' }}>
      <Link header="Dashboard">
        <LinkItem link="Overview">
          <ArticleOutlinedIcon sx={{ color: '#979797' }} />
        </LinkItem>
      </Link>

      {/* Transactions */}
      <Link header="Transactions">
        <LinkItem link="Transactions">
          <PaidOutlinedIcon sx={{ color: '#979797' }} />
        </LinkItem>
        <LinkItem link="Balance">
          <PaidOutlinedIcon sx={{ color: '#979797' }} />
        </LinkItem>
        <LinkItem link="Commissions">
          <PaidOutlinedIcon sx={{ color: '#979797' }} />
        </LinkItem>
      </Link>
    </div>
  );
};
