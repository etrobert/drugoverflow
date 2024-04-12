'use client';

import { Button } from '@/components/ui/button';
import same from './same';

type Props = {
  storyId: number;
};

const SameButtons = ({ storyId }: Props) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => same(storyId, true)} size="sm">
        Me Too
      </Button>
      <Button onClick={() => same(storyId, false)} size="sm">
        Not Me
      </Button>
    </div>
  );
};

export default SameButtons;
