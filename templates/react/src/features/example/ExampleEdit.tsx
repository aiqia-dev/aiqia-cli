
import { useNavigate, useParams } from 'react-router-dom';
import { ExampleForm } from './components/ExampleForm';
import { useGetExample } from './services/useGetExample';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { saveExample } from './services/queries';
import { Example } from './services/types';
import { useState } from 'react';
import { getExamplesKey } from './services/keys';
import { Heading, toast } from '@aiqiabr/aiqia-ui';

export const ExampleEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isCreating = id === 'new';
  const exampleId = isCreating ? undefined : Number(id);

  const { data: example, isLoading: isLoadingExample } = useGetExample(exampleId);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const mutation = useMutation({
    mutationFn: (data: Omit<Example, 'id'> & { id?: number }) => {
      setIsSubmitting(true);
      return saveExample(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: getExamplesKey() });
      toast({
        title: `Example ${isCreating ? 'created' : 'updated'} successfully`,
        variant: 'success',
      });
      navigate('/examples');
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const handleSubmit = (data: Omit<Example, 'id'> & { id?: number }) => {
    mutation.mutate(data);
  };

  return (
    <>
      <Heading variant="h2">
        {isCreating ? 'Add New Example' : 'Edit Example'}
      </Heading>
      <div className="mt-6 p-6 bg-card rounded-lg border">
        <ExampleForm
          initialData={example}
          onSubmit={handleSubmit}
          isLoading={isLoadingExample || isSubmitting}
        />
      </div>
    </>
  );
};
