import { Badge } from "./ui/badge";

export function PollCard() {
  return (
    <li className='list-none relative bg-white dark:bg-gray-800 px-4 py-4 sm:px-6 mb-4 rounded-md border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600'>
      <div className='flex flex-row items-center'>
        <div className='flex-auto overflow-hidden mr-6'>
          <div className='flex space-x-4'>
            {/* Nome da Poll */}
            <div className='flex-shrink-0 flex w-10 h-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500'></div>
            <div className='flex-grow leading-none overflow-hidden'>
              <div className='text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 truncate'>
                <span className='nome-da-poll'>Poll name - amorzinho</span>
                <div className='mt-1'>
                  <span className='text-xs md:text-sm text-gray-600 dark:text-gray-400'>
                    16 de abr de 2023
                  </span>
                </div>
              </div>
              {/* Participantes */}
              <div className='flex-shrink-0 w-16 sm:w-32 text-center flex items-center justify-center'>
                <span className='font-medium text-sm sm:text-base text-gray-600 dark:text-gray-400'>
                  24
                </span>
              </div>
              {/* Status */}
              <div className='flex-shrink-0 w-32 text-center flex justify-center sm:block'>
                <Badge>Ativo</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
