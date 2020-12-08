import React from 'react';
import Layout from '../layout/Layout';

export default ({ children = '-- Not implemented --' }) => (
  <Layout>
    <h2>{children}</h2>
  </Layout>
);
