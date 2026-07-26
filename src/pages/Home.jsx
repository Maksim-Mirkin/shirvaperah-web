export default function Home() {
  return (
    <main>
      <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-6xl place-items-center px-6 py-20 text-center">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.3em] text-[#73805B]">
            שיר ופרח
          </p>
          <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
            משהו יפה מתחיל לפרוח
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-[#2C3E1F]/70">
            הפרויקט מוכן להרצה. זהו עמוד זמני עד שנוסיף את העיצוב והתוכן המלאים שקיבלת.
          </p>
          <div className="mt-10 inline-flex rounded-full bg-[#2C3E1F] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-[#2C3E1F]/15">
            האתר בבנייה
          </div>
        </div>
      </section>
    </main>
  );
}
