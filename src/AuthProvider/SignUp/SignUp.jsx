import CommonButton from '../../Component/SharedComponent/Button/CommonButton';
import CommonHedding from '../../Component/SharedComponent/Hedding/CommonHedding';

const Signup = () => {
    return (
        <div className="px-4 py-10 md:px-8 lg:px-16 max-w-6xl mx-auto space-y-16">

            {/* Intro Text */}
            <p className="text-sm text-Gray_Color dark:text-White_Color text-center md:text-left">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry’s standard dummy text ever since this.
            </p>

            {/* Personal Details Section */}
            <section className="border-b pb-10">
                <CommonHedding FastPart={"Your Personal"} SecondPart={" Details"} />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {/* First Name Field */}
                    <div>
                        <label htmlFor="First Name"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required />
                    </div>
                    {/* Last Name Field */}
                    <div>
                        <label htmlFor="Last Name"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required />
                    </div>
                    {/* Email Field */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="company@domain.com"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required />
                    </div>
                    {/* phone number Field */}
                    <div>
                        <label
                            htmlFor="tel"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Telephone
                        </label>
                        <input
                            type="tel"
                            placeholder="Your phone number"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required />
                    </div>
                </form>
            </section>

            {/* Address Section */}
            <section className="border-b pb-10">
                <CommonHedding FastPart={"New"} SecondPart={" Customer"} />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {/* Address 1 Field */}
                    <div>
                        <label htmlFor="Address 1"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Address 1
                        </label>
                        <input
                            type="text"
                            placeholder="4279 Zion Car Port Suite 6372"
                            className="w-full border-b border-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Address 2 Field */}
                    <div>
                        <label htmlFor="Address 2"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Address 2
                        </label>
                        <input
                            type="text"
                            placeholder="Address 2"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                        />
                    </div>

                    {/* City Field */}
                    <div>
                        <label htmlFor="City"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            City
                        </label>
                        <input
                            type="text"
                            placeholder="Your city"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Post code Field */}
                    <div>
                        <label htmlFor="Post Code"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Post Code
                        </label>
                        <input
                            type="text"
                            placeholder="03128"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Country Field */}
                    <div>
                        <label htmlFor="Country"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Country
                        </label>
                        <select
                            className="w-full border-b border-Gray_Color text-Gray_Color dark:text-White_Color bg-Primary_Color dark:bg-Dark_BG_Color py-2 px-3"
                            required>
                            <option>Please select</option>
                            <option>Bangladesh</option>
                            <option>USA</option>
                            <option>UK</option>
                        </select>
                    </div>

                    {/* Region/state Field */}
                    <div>
                        <label htmlFor="Region/State"
                            className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Region/State
                        </label>
                        <select
                            className="w-full border-b border-b-Gray_Color text-Gray_Color dark:text-White_Color bg-Primary_Color dark:bg-Dark_BG_Color py-2 px-3"
                            required>
                            <option>Please select</option>
                            <option>Dhaka</option>
                            <option>California</option>
                            <option>Texas</option>
                        </select>
                    </div>

                </form>
            </section>

            {/* Password Section */}
            <section className="pb-10">
                <CommonHedding FastPart={"Your"} SecondPart={" Password"} />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                    {/*Password field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none"
                            required >
                        </input>
                    </div>
                    {/* Reapeat Password field  */}
                    <div>
                        <label htmlFor="Repeat password" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            placeholder="Repeat password"
                            className=" w-full border-b border-b-Gray_Color rounded-sm focus:outline-none py-2 px-3"
                            required >
                        </input>
                    </div>
                </form>
                {/* Privacy and Policy Section  */}
                <div className="flex items-center mt-4 space-x-2">
                    <input type="checkbox" id="agree" className="w-4 h-4" required />
                    <label htmlFor="agree" className="text-sm text-Gray_Color dark:text-White_Color">
                        I have read and agree to the Privacy Policy
                    </label>
                </div>
                {/* subscribe Newsletter Section  */}
                <div className="flex items-center mt-4 space-x-4">
                    <label className="text-sm text-Gray_Color dark:text-White_Color">Subscribe Newsletter</label>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="subscribe" value="yes" />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="radio" className="form-radio" name="subscribe" value="no" />
                        <span className="ml-2">No</span>
                    </label>
                </div>
                {/* Log in Button  */}
                <div className="mt-6">
                    <CommonButton ButtonName={"Log in"} />
                </div>
            </section>

        </div>
    );
};

export default Signup;
