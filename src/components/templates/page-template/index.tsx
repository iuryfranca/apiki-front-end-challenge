import { TemplateWrapper } from './styles';

interface PageTempalteProps {
  title: string;
  children: React.ReactNode;
}

export const PageTemplate = ({ children, title }: PageTempalteProps) => {
  return (
    <>
      <title data-testid="page-title">{title}</title>
      <TemplateWrapper>{children}</TemplateWrapper>
    </>
  );
};
