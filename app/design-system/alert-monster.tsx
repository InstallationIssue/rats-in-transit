export default function AlertMonster ({
    params
  }: { 
    params: {
      id: number,
    name: string,
    background: string,
    health_max: number,
    health_lost: number,
    armor: number,
    str: number,
    dex: number,
    wil: number,
    size: string,
    attack: number
  }}) {
    return (
      <div className="flex flex-col justify-center items-start self-stretch rounded-md border border-[#f2f5ea]">
        <div className="monster flex justify-center items-start self-stretch pt-[0.3125rem] pr-[0.3125rem] pb-[0.3125rem] pl-[0.3125rem] h-[3.75rem]">
          <div className="w-[3.125rem] h-[3.125rem]">
            <div className="flex-shrink-0 w-[3.125rem] h-[3.125rem]">
              <div className="180deg at 50% 50%, #40ff3d 179.49220418930054deg, #e75a7c 183.28821659088135deg, #e75a7c 269.476261138916deg, #40ff3d 270.6572484970093deg)] flex-shrink-0 w-[3.125rem] h-[3.125rem] bg-[conic-gradient(from" />
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx={20} cy={20} r={20} fill="#1A1A27" />
              </svg>
              <div className="inline-flex justify-center items-center gap-2.5 pl-[0.3125rem] pr-[0.3125rem] p-0 rounded-[0.625rem] text-[#40ff3d] font-['Inter'] text-2xl font-semibold leading-[normal]">
                (level)
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-center items-center w-4 h-4">
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_46_1679)">
                  <path d="M8.00001 0C8.14376 0 8.28751 0.03125 8.41876 0.090625L14.3031 2.5875C14.9906 2.87813 15.5031 3.55625 15.5 4.375C15.4844 7.475 14.2094 13.1469 8.82501 15.725C8.30314 15.975 7.69689 15.975 7.17501 15.725C1.79064 13.1469 0.515639 7.475 0.500014 4.375C0.496889 3.55625 1.00939 2.87813 1.69689 2.5875L7.58439 0.090625C7.71251 0.03125 7.85626 0 8.00001 0Z" fill="#F2F5EA" />
                </g>
                <defs>
                  <clipPath id="clip0_46_1679">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="text-field overflow-hidden text-[#1a1a27] font-['Nokora'] text-sm font-bold leading-[normal]">9</div>
          </div>
          <div className="name_stats flex flex-col items-start self-stretch pt-[0.3125rem] pb-[0.3125rem] px-0">
            <div className="broko self-stretch overflow-hidden text-[#f2f5ea] font-['Nokora'] text-xl leading-[normal]">The Throngler</div>
            <div className="stats flex items-center gap-2.5 self-stretch pr-0">
              <div className="flex items-center">
                <div className="flex justify-center items-center w-5 h-5">
                  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.4 2.19999C2.4 1.75749 2.7575 1.39999 3.2 1.39999H4C4.4425 1.39999 4.8 1.75749 4.8 2.19999V6.19999V7.79999V11.8C4.8 12.2425 4.4425 12.6 4 12.6H3.2C2.7575 12.6 2.4 12.2425 2.4 11.8V10.2H1.6C1.1575 10.2 0.8 9.84249 0.8 9.39999V7.79999C0.3575 7.79999 0 7.44249 0 6.99999C0 6.55749 0.3575 6.19999 0.8 6.19999V4.59999C0.8 4.15749 1.1575 3.79999 1.6 3.79999H2.4V2.19999ZM13.6 2.19999V3.79999H14.4C14.8425 3.79999 15.2 4.15749 15.2 4.59999V6.19999C15.6425 6.19999 16 6.55749 16 6.99999C16 7.44249 15.6425 7.79999 15.2 7.79999V9.39999C15.2 9.84249 14.8425 10.2 14.4 10.2H13.6V11.8C13.6 12.2425 13.2425 12.6 12.8 12.6H12C11.5575 12.6 11.2 12.2425 11.2 11.8V7.79999V6.19999V2.19999C11.2 1.75749 11.5575 1.39999 12 1.39999H12.8C13.2425 1.39999 13.6 1.75749 13.6 2.19999ZM10.4 6.19999V7.79999H5.6V6.19999H10.4Z" fill="#F2F5EA" />
                  </svg>
                </div>
                <div className="str-2 overflow-hidden text-[#f2f5ea] font-['Nokora'] leading-[normal]">4</div>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center w-5 h-5">
                  <svg width={16} height={14} viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_1692)">
                      <path d="M8 0.600006C8.4425 0.600006 8.8 0.957506 8.8 1.40001V4.70251C8.8 5.11251 9.01 5.49501 9.355 5.71501L9.6 5.87001V4.73251C9.6 3.77501 10.375 3.00001 11.3325 3.00001C11.875 3.00001 12.4025 3.25501 12.7275 3.72001C13.1125 4.27251 13.835 5.35501 14.5025 6.64251C15.165 7.91501 15.8125 9.45501 15.9925 10.9C15.9975 10.9325 15.9975 10.965 15.9975 11V11.175C15.9975 12.4025 15.0025 13.4 13.7725 13.4C13.59 13.4 13.41 13.3775 13.2325 13.3325L11.415 12.8775C10.35 12.6125 9.6 11.6525 9.6 10.55V8.72501L11.8625 10.165C12.05 10.2825 12.295 10.2275 12.415 10.0425C12.535 9.85751 12.4775 9.61001 12.2925 9.49001L9.6 7.77751V7.76751L8.4975 7.06501C8.315 6.95001 8.15 6.81251 8 6.66251C7.8525 6.81251 7.685 6.95001 7.5025 7.06501L6.4 7.76751L4.03 9.27501L3.6925 9.49001C3.6925 9.49001 3.6925 9.49001 3.69 9.49001C3.505 9.61001 3.45 9.85501 3.57 10.0425C3.6875 10.23 3.935 10.285 4.1225 10.165L6.4 8.71501V10.55C6.4 11.6525 5.65 12.6125 4.5825 12.8775L2.765 13.3325C2.5875 13.3775 2.4075 13.4 2.225 13.4C0.9975 13.4 0 12.405 0 11.175V11C0 10.9675 0.0025 10.9325 0.005 10.9C0.185 9.45251 0.8325 7.91501 1.495 6.64251C2.165 5.35501 2.885 4.27251 3.27 3.72001C3.595 3.25501 4.12 3.00001 4.665 3.00001C5.625 3.00001 6.4 3.77501 6.4 4.73251V5.87001L6.645 5.71501C6.99 5.49501 7.2 5.11251 7.2 4.70251V1.40001C7.2 0.957506 7.5575 0.600006 8 0.600006Z" fill="#F2F5EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_1692">
                        <rect width={16} height="12.8" fill="white" transform="translate(0 0.600006)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="dex-2 overflow-hidden text-[#f2f5ea] font-['Nokora'] leading-[normal]">2</div>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center w-5 h-5">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_46_1697)">
                      <path d="M5.75 0C6.71562 0 7.5 0.784375 7.5 1.75V14.25C7.5 15.2156 6.71562 16 5.75 16C4.84688 16 4.10313 15.3156 4.00938 14.4344C3.84688 14.4781 3.675 14.5 3.5 14.5C2.39687 14.5 1.5 13.6031 1.5 12.5C1.5 12.2688 1.54062 12.0437 1.6125 11.8375C0.66875 11.4812 0 10.5688 0 9.5C0 8.50313 0.584375 7.64062 1.43125 7.24062C1.15937 6.9 1 6.46875 1 6C1 5.04063 1.675 4.24062 2.575 4.04375C2.525 3.87187 2.5 3.6875 2.5 3.5C2.5 2.56562 3.14375 1.77813 4.00938 1.55938C4.10313 0.684375 4.84688 0 5.75 0ZM10.25 0C11.1531 0 11.8938 0.684375 11.9906 1.55938C12.8594 1.77813 13.5 2.5625 13.5 3.5C13.5 3.6875 13.475 3.87187 13.425 4.04375C14.325 4.2375 15 5.04063 15 6C15 6.46875 14.8406 6.9 14.5688 7.24062C15.4156 7.64062 16 8.50313 16 9.5C16 10.5688 15.3313 11.4812 14.3875 11.8375C14.4594 12.0437 14.5 12.2688 14.5 12.5C14.5 13.6031 13.6031 14.5 12.5 14.5C12.325 14.5 12.1531 14.4781 11.9906 14.4344C11.8969 15.3156 11.1531 16 10.25 16C9.28438 16 8.5 15.2156 8.5 14.25V1.75C8.5 0.784375 9.28438 0 10.25 0Z" fill="#F2F5EA" />
                    </g>
                    <defs>
                      <clipPath id="clip0_46_1697">
                        <rect width={16} height={16} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="wil-2 overflow-hidden text-[#f2f5ea] font-['Nokora'] leading-[normal]">2</div>
              </div>
              <div className="flex items-center">
                <div className="flex justify-center items-center w-5 h-5">
                  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.07811 2.90312C7.52498 4.24374 7.06873 5.59687 6.05936 5.92812C5.04998 6.25937 3.86873 5.44062 3.42186 4.09999C2.97498 2.75937 3.43123 1.40624 4.44061 1.07499C5.44999 0.743742 6.63123 1.56249 7.07811 2.90312ZM3.13748 6.20624C3.72811 7.21874 3.58436 8.39687 2.81873 8.83437C2.05311 9.27187 0.95311 8.80624 0.36561 7.79374C-0.22189 6.78124 -0.0843903 5.60312 0.681235 5.16562C1.44686 4.72812 2.54686 5.19374 3.13436 6.20624H3.13748ZM2.16248 12.5375C3.79998 8.12187 6.70936 6.99999 7.99998 6.99999C9.29061 6.99999 12.2 8.12187 13.8375 12.5375C13.95 12.8406 14 13.1656 14 13.4906V13.5406C14 14.3469 13.3469 15 12.5406 15C12.1812 15 11.825 14.9562 11.4781 14.8687L8.72811 14.1812C8.24998 14.0625 7.74998 14.0625 7.27186 14.1812L4.52186 14.8687C4.17498 14.9562 3.81873 15 3.45936 15C2.65311 15 1.99998 14.3469 1.99998 13.5406V13.4906C1.99998 13.1656 2.04998 12.8406 2.16248 12.5375ZM13.1812 8.83437C12.4156 8.39687 12.2719 7.21874 12.8625 6.20624C13.4531 5.19374 14.55 4.72812 15.3156 5.16562C16.0812 5.60312 16.225 6.78124 15.6344 7.79374C15.0437 8.80624 13.9469 9.27187 13.1812 8.83437ZM9.69061 5.92812C8.68124 5.59687 8.22499 4.24374 8.67186 2.90312C9.11873 1.56249 10.3 0.743742 11.3094 1.07499C12.3187 1.40624 12.775 2.75937 12.3281 4.09999C11.8812 5.44062 10.7 6.25937 9.69061 5.92812Z" fill="#F2F5EA" />
                  </svg>
                </div>
                <div className="wil-3 overflow-hidden text-[#f2f5ea] font-['Nokora'] leading-[normal]">2</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-[0.3125rem] pr-[0.3125rem] pb-[0.3125rem] pl-[0.3125rem] w-[3.125rem] h-[3.125rem]">
            <div className="flex flex-shrink-0 justify-center items-center w-10 h-10">
              <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_46_1707)">
                  <path d="M20 0C21.1603 0 22.2731 0.460936 23.0936 1.28141C23.9141 2.10188 24.375 3.21468 24.375 4.375C24.375 5.53532 23.9141 6.64812 23.0936 7.46859C22.2731 8.28906 21.1603 8.75 20 8.75C18.8397 8.75 17.7269 8.28906 16.9064 7.46859C16.0859 6.64812 15.625 5.53532 15.625 4.375C15.625 3.21468 16.0859 2.10188 16.9064 1.28141C17.7269 0.460936 18.8397 0 20 0ZM10.4766 11.2344C10.7344 10.2188 11.6485 9.375 12.836 9.375C13.7969 9.375 14.6016 9.9375 15 10.7031C15.9375 12.5156 17.8281 13.75 20 13.75C22.1719 13.75 24.0625 12.5156 25 10.7031C25.3984 9.9375 26.2031 9.375 27.1641 9.375C28.3594 9.375 29.2734 10.2188 29.5234 11.2344C30.0703 13.4062 32.0391 15.0078 34.375 15.0078C35.2188 15.0078 36.0156 14.7969 36.7031 14.4297C37.3594 14.0859 38.1797 14.0781 38.8594 14.5C39.875 15.125 40.1953 16.4531 39.5781 17.4688L31.2266 31.25H30H26.8438H13.1563H10H8.77345L0.421887 17.4688C-0.1953 16.4531 0.125012 15.125 1.14064 14.5C1.82032 14.0859 2.64064 14.0859 3.29689 14.4297C3.9922 14.7969 4.78126 15.0078 5.62501 15.0078C7.96095 15.0078 9.9297 13.4062 10.4766 11.2344ZM8.75001 33.75H31.25L34.4844 36.9844C34.8125 37.3125 35 37.7656 35 38.2344C35 39.2109 34.2109 40 33.2344 40H6.76564C5.78907 40 5.00001 39.2109 5.00001 38.2344C5.00001 37.7656 5.18751 37.3125 5.51564 36.9844L8.75001 33.75Z" fill="#F2F5EA" />
                </g>
                <defs>
                  <clipPath id="clip0_46_1707">
                    <rect width={40} height={40} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
}