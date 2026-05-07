import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

export const Waitlist = () => {
  const [state, handleSubmit] = useForm('mzdovlzw');

  useEffect(() => {
    if (state.succeeded) {
      // You can do additional things here if you want to reset after some time
    }
  }, [state.succeeded]);

  return (
    <section id="waitlist" className="bg-[#080808] py-[120px] px-6">
      <div className="max-w-[600px] mx-auto text-center">
        <div className="font-jetbrains font-medium text-[11px] uppercase tracking-[0.2em] text-taho-gold mb-[14px]">
          EARLY ACCESS
        </div>
        <h2 className="font-outfit font-bold text-[28px] md:text-[44px] text-taho-primary tracking-[-0.01em] leading-tight">
          Be among the first 100 developers to test Taho.
        </h2>
        <p className="font-outfit text-[16px] text-taho-secondary mt-[16px] leading-[1.6]">
          Early testers get lifetime Pro discount, direct line to the founder, and shape the product roadmap.
        </p>

        <div className="flex flex-wrap justify-center gap-[10px] mt-[24px]">
          <div className="bg-surface-2 border border-[rgba(255,255,255,0.08)] rounded-full px-[16px] py-[8px] font-outfit text-[13px] font-medium text-taho-secondary">
            🔒 Free Beta Access
          </div>
          <div className="bg-surface-2 border border-[rgba(255,255,255,0.08)] rounded-full px-[16px] py-[8px] font-outfit text-[13px] font-medium text-taho-secondary">
            ⭐ Lifetime Discount
          </div>
          <div className="bg-surface-2 border border-[rgba(255,255,255,0.08)] rounded-full px-[16px] py-[8px] font-outfit text-[13px] font-medium text-taho-secondary">
            🛠 Shape the Product
          </div>
        </div>

        <div className="max-w-[480px] mx-auto mt-[32px]">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-[8px]">
            <input type="hidden" name="source" value="taho-landing" />
            <div className="flex-1 flex flex-col items-start gap-1">
              <input
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full bg-surface-2 border border-[rgba(255,255,255,0.11)] rounded-[10px] px-[16px] font-jetbrains text-[14px] text-taho-primary placeholder-[#444] h-[52px] outline-none focus:border-[rgba(201,146,42,0.5)] focus:shadow-[0_0_0_3px_rgba(201,146,42,0.08)] transition-all"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="font-outfit text-[12px] text-taho-red pl-2"
              />
            </div>
            
            <button
              type="submit"
              disabled={state.submitting}
              className={`h-[52px] px-[24px] rounded-[10px] font-outfit font-bold text-[14px] whitespace-nowrap border-none cursor-pointer transition-all self-start ${
                state.succeeded 
                  ? 'bg-taho-green text-black' 
                  : 'bg-taho-gold text-black hover:opacity-90'
              } ${state.submitting ? 'opacity-70 cursor-wait' : ''}`}
            >
              {state.submitting ? 'Joining...' : state.succeeded ? '✓ You\'re in!' : 'Join Waitlist'}
            </button>
          </form>

          {state.succeeded && (
            <div className="mt-[16px] text-center font-outfit text-[14px] text-taho-green">
              🎉 Check your email. We'll send your beta access link when we're ready.
            </div>
          )}

          {state.errors && state.errors.length > 0 && !state.submitting && !state.succeeded && (
            <div className="mt-[16px] text-center font-outfit text-[14px] text-taho-red">
              Something went wrong. Try again.
            </div>
          )}

          <div className="font-outfit text-[12px] text-taho-muted text-center mt-[24px]">
            No spam. Unsubscribe anytime. We respect your privacy.
          </div>
        </div>
      </div>
    </section>
  );
};
