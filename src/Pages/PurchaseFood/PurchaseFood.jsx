const PurchaseFood = () => {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900 mt-24 min-h-[calc(100vh-410px)] container mx-auto mb-10">
      <form
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-6 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-2">
            <p className="font-medium">Personal Inormation</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-4">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm">
                First name
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm">
                Last name
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-3"
              />
            </div>
            <div className="col-span-full">
              <button className="btn btn-block btn-primary">Purchase</button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default PurchaseFood;
