import { pause } from '@/lib/utils';

export default async function TeamSettings() {
  await pause(3000);

  //throw new Error('Settings Data not available')

  return (
    <section className="h-96 w-96 border-2 rounded-lg p-4 bg-blue-600">
      <h2 className="text-xl">Team Settings</h2>
      <ul className="mt-5">
        <li>Team 1</li>
        <li>Team 2</li>
        <li>Team 3</li>
        <li>Team 4</li>
        <li>Team 5</li>
      </ul>
    </section>
  );
}
