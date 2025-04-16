
import { Button, Heading, Input } from '@aiqiabr/aiqia-ui';
import { Plus } from 'lucide-react';
import { ExampleTable } from './components/ExampleTable';
import { useGetExamples } from './services/useGetExamples';

export const ExampleList = () => {
  const { data: examples, isLoading } = useGetExamples();

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Heading variant="h2">Examples</Heading>
      </div>

      <div className="flex mb-4 justify-between">
        <div>
          <Input placeholder="Search..." />
        </div>

        <Button href="/examples/new">
          <Plus className="h-4 w-4" /> Add Example
        </Button>
      </div>

      <ExampleTable examples={examples || []} isLoading={isLoading} />
    </>
  );
};
