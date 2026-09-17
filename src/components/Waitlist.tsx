import { useForm, ValidationError } from '@formspree/react';

export const Waitlist = () => {
  const [state, handleSubmit] = useForm('mzdovlzw');
  return (
    <section id="waitlist" className="beta-form" aria-labelledby="waitlist-heading">
      <h2 id="waitlist-heading">Be part of what comes next.</h2>
      <p>Taho is in closed beta. Leave your email to register interest in future access and launch updates.</p>
      {state.succeeded ? (
        <p role="status">Your interest has been registered. This is not a confirmation of beta access.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="source" value="taho-landing" />
          <label htmlFor="beta-email">Email address
            <input id="beta-email" type="email" name="email" autoComplete="email" required placeholder="you@example.com" aria-describedby="beta-disclosure" />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <button type="submit" disabled={state.submitting}>{state.submitting ? 'Registering…' : 'Join waitlist'}</button>
        </form>
      )}
      {state.errors && !state.submitting && !state.succeeded && <p role="alert">We couldn't register your interest. Please try again.</p>}
      <p id="beta-disclosure" className="form-disclosure">Submitting sends your email to Formspree for Taho's waitlist. <a href="/privacy.html">Read the privacy notice</a>. No access date is promised.</p>
    </section>
  );
};
