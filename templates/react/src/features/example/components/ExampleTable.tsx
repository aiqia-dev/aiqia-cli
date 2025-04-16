
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@aiqiabr/aiqia-ui';
import { Edit } from 'lucide-react';
import { Example } from '../services/types';

type ExampleTableProps = {
  examples: Example[];
  isLoading?: boolean;
};

export const ExampleTable = ({ examples, isLoading }: ExampleTableProps) => {
  if (isLoading) {
    return <div>Loading examples...</div>;
  }

  if (!examples || examples.length === 0) {
    return <div>No examples found.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>License Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {examples.map((example) => (
          <TableRow key={example.id}>
            <TableCell>{example.name}</TableCell>
            <TableCell>{example.phone}</TableCell>
            <TableCell>{example.email}</TableCell>
            <TableCell>{example.licenseNumber}</TableCell>
            <TableCell>
              <span
                className={`px-2 py-1 rounded-full text-xs ${example.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
              >
                {example.active ? 'Active' : 'Inactive'}
              </span>
            </TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  href={`/examples/${example.id}/edit`}
                >
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
