import React, { FC } from 'react';

interface DocsParams {
  params?: { docs: string[] };
}

const Docs: FC<DocsParams> = () => {
  return <div>Docs home page</div>;
};

export default Docs;
