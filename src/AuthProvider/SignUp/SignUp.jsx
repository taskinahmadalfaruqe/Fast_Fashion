
import CommonButton from '../../Component/SharedComponent/CommonButton/CommonButton';
import CommonHedding from '../../Component/SharedComponent/CommonHedding/CommonHedding';

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
                <CommonHedding FastPart="Your Personal" SecondPart=" Details" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {/* First Name Field */}
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Last Name Field */}
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="company@domain.com"
                            autoComplete="email"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Phone Number Field */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Telephone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            autoComplete="tel"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>
                </form>
            </section>

            {/* Address Section */}
            <section className="border-b pb-10">
                <CommonHedding FastPart="New" SecondPart=" Customer" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {/* Address 1 Field */}
                    <div>
                        <label htmlFor="address1" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Address:
                        </label>
                        <input
                            type="text"
                            id="address1"
                            name="address1"
                            placeholder="House: 68, Rode:5, or Village: Shimultali "
                            className="w-full border-b border-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Address 2 Field */}
                    <div>
                        <label htmlFor="address2" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Land Mark:
                        </label>
                        <input
                            type="text"
                            id="address2"
                            name="address2"
                            placeholder="Famous Place"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                        />
                    </div>

                    {/* City Field */}
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            City or Thana:
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Your city"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Post Code Field */}
                    <div>
                        <label htmlFor="postCode" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Post Code:
                        </label>
                        <input
                            type="text"
                            id="postCode"
                            name="postCode"
                            placeholder="03128"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* District Field */}
                    <div>
                        <label htmlFor="District" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            District:
                        </label>
                        <input
                            type="text"
                            id="District"
                            name="District"
                            placeholder="Like Dinajpur"
                            className="w-full border-b border-b-Gray_Color rounded-sm py-2 px-3 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Region/State Field */}
                    <div>
                        <label htmlFor="region" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Division:
                        </label>
                        <select
                            id="region"
                            name="region"
                            className="w-full border-b border-b-Gray_Color text-Gray_Color dark:text-White_Color bg-Primary_Color dark:bg-Dark_BG_Color py-2 px-3"
                            required
                        >
                            <option value="">Please select</option>
                            <option value="Texas">Barisal</option>
                            <option value="Texas">Chittagong</option>
                            <option value="Dhaka">Dhaka</option>
                            <option value="California">Khulna</option>
                            <option value="Texas">Mymensingh</option>
                            <option value="Texas">Rajshahi</option>
                            <option value="Texas">Rangpur</option>
                            <option value="Texas">Sylhet</option>
                        </select>
                    </div>

                    {/* Country Field */}
                    <div>
                        <label htmlFor="country" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Country:
                        </label>
                        <select
                            id="country"
                            name="country"
                            className="w-full border-b border-Gray_Color text-Gray_Color dark:text-White_Color bg-Primary_Color dark:bg-Dark_BG_Color py-2 px-3"
                            required
                        >
                            <option value="">Please select</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="USA">China</option>
                        </select>
                    </div>
                </form>
            </section>

            {/* Password Section */}
            <section className="pb-10">
                <CommonHedding FastPart="Your" SecondPart=" Password" />

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            autoComplete="new-password"
                            className="w-full border-b border-b-Gray_Color rounded-sm px-3 py-2 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Repeat Password Field */}
                    <div>
                        <label htmlFor="repeatPassword" className="block text-sm font-medium text-Black_Color dark:text-White_Color mb-1">
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            id="repeatPassword"
                            name="repeatPassword"
                            placeholder="Repeat password"
                            autoComplete="new-password"
                            className="w-full border-b border-b-Gray_Color rounded-sm focus:outline-none py-2 px-3"
                            required
                        />
                    </div>
                </form>

                {/* Privacy and Policy Section */}
                <div className="flex items-center mt-4 space-x-2">
                    <input type="checkbox" id="agree" name="agree" className="w-4 h-4" required />
                    <label htmlFor="agree" className="text-sm text-Gray_Color dark:text-White_Color">
                        I have read and agree to the Privacy Policy
                    </label>
                </div>

                {/* Subscribe Newsletter Section */}
                <fieldset className="flex items-center mt-4 space-x-4">
                    <legend className="text-sm text-Gray_Color dark:text-White_Color">Subscribe Newsletter</legend>
                    <label className="inline-flex items-center">
                        <input type="radio" name="subscribe" value="yes" />
                        <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                        <input type="radio" name="subscribe" value="no" />
                        <span className="ml-2">No</span>
                    </label>
                </fieldset>

                {/* Submit Button */}
                <div className="mt-6">
                    <CommonButton ButtonName="Log in" type="submit" />
                </div>
            </section>
        </div>
    );
};

export default Signup;
