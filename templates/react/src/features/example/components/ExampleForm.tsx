import { Button, Input, Label, Switch } from '@aiqiabr/aiqia-ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ExampleFormData, exampleSchema } from '../schemas/example.schema';
import { Example } from '../services/types';

type ExampleFormProps = {
  initialData?: Example;
  onSubmit: (data: Omit<Example, 'id'> & { id?: number }) => void;
  isLoading?: boolean;
};

export const ExampleForm = ({
  initialData,
  onSubmit,
  isLoading,
}: ExampleFormProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ExampleFormData>({
    resolver: zodResolver(exampleSchema),
    defaultValues: {
      name: initialData?.name || '',
      phone: initialData?.phone || '',
      email: initialData?.email || '',
      licenseNumber: initialData?.licenseNumber || '',
      active: initialData?.active ?? true,
    },
  });

  const isActive = watch('active');

  const onSubmitForm = (data: ExampleFormData) => {
    onSubmit({
      ...data,
      id: initialData?.id,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" {...register('name')} />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" {...register('phone')} />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseNumber">License Number</Label>
          <Input id="licenseNumber" {...register('licenseNumber')} />
          {errors.licenseNumber && (
            <p className="text-sm text-red-500">
              {errors.licenseNumber.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="active"
          checked={isActive}
          onCheckedChange={(checked) => setValue('active', checked)}
        />
        <Label htmlFor="active">Active Status</Label>
      </div>

      <div className="flex justify-end gap-4">
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          onClick={() => navigate(-1)}
        >
          Cancelar
        </Button>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Saving...' : 'Save Example'}
        </Button>
      </div>
    </form>
  );
};
