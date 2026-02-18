import WaitlistForm from './WaitlistForm';

export default function FinalCTA() {
  return (
    <section id="join" className="py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-8">
            SPAM is starting with students like you.
          </h2>
          <p className="text-xl text-gray-300">
            Join the movement to make campus services fair, transparent, and student-governed.
          </p>
        </div>
        <WaitlistForm />
      </div>
    </section>
  );
}
