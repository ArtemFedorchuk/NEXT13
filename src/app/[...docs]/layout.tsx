import { ReactNode } from 'react';
import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Docs',
//   description: 'Docs information',
// };

type MetadataProps = {
  params: { docs: string[] };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params, searchParams }: MetadataProps): Metadata {
  console.log('params', params);
  console.log('searchParams', searchParams);

  return {
    title: `Docs ${params.docs.toString()}`,
    description: 'Docs information',
  };
}

export default function DocsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
