import { serverClient as supabase } from '@/app/supabaseClient';

type Props = {
  factId: string;
};

const SameButton = ({ factId }: Props) => {
  const action = async () => {
    'use server';

    const { error } = await supabase
      .from('sames')
      .insert({ same: true, fact_id: factId });

    if (error) throw new Error(error.message);
  };

  return (
    // @ts-expect-error nextjs server action are not correctly typed
    <form action={action}>
      <button>Same</button>
    </form>
  );
};

export default SameButton;
