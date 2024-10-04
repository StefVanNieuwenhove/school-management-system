import { ClassCard } from '@/components/layout';
import { getClasses } from '@/db/class';
import React from 'react';

const AdminClassesPage = async () => {
  const classes = (await getClasses()) || [];
  return (
    <section className='flex flex-wrap gap-2'>
      {classes.map((item) => (
        <ClassCard key={item.id} {...item} />
      ))}
    </section>
  );
};

export default AdminClassesPage;
