export default function HealthCircle ({
    params
  }: { 
    params: {
    health_max: number,
    health_lost: number,
    armor: number
  }}) {

    const health = params.health_max - params.health_lost
    const fraction = health/params.health_max

    return (
      <div>
        <div>
          <div id='progress-circle'>
            {6/*<CircularProgressbar value={fraction} text={`${health}`/>*/}
          </div>
          <div>
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
          <div>
            {params.armor}
          </div>
        </div>
      </div>
    )
  }