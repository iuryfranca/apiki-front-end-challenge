import { TemplateWrapper } from './styles';

interface PageTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ children, title }: PageTemplateProps) => {
  return (
    <>
      <title>{title}</title>
      <TemplateWrapper>{children}</TemplateWrapper>
    </>
  );
};
